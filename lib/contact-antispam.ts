import { createHash } from 'node:crypto'

const IP_LIMIT = 6
const IP_WINDOW_MS = 15 * 60 * 1000
const EMAIL_LIMIT = 3
const EMAIL_WINDOW_MS = 60 * 60 * 1000
const DUPLICATE_WINDOW_MS = 30 * 60 * 1000
const MAX_TRACKED_KEYS = 2_000
const MIN_HUMAN_FILL_MS = 1_500
const MAX_CLOCK_SKEW_MS = 5 * 60 * 1000
const SPAM_BLOCK_SCORE = 5

type Bucket = {
  count: number
  resetAt: number
}

type ContactSpamInput = {
  name: string
  company: string
  email: string
  phone?: string
  message: string
  sourcePath?: string
  startedAt: number
}

type SpamDecision = {
  block: boolean
  score: number
  reasons: string[]
}

type RateLimitDecision = {
  allowed: boolean
  retryAfterSeconds: number
}

const ipBuckets = new Map<string, Bucket>()
const emailBuckets = new Map<string, Bucket>()
const successfulFingerprints = new Map<string, number>()

function hash(value: string) {
  return createHash('sha256').update(value).digest('hex')
}

function normalize(value: string) {
  return value.normalize('NFKC').toLowerCase().replace(/\s+/g, ' ').trim()
}

function pruneMap<T>(map: Map<string, T>, isExpired: (value: T) => boolean) {
  if (map.size < MAX_TRACKED_KEYS) return

  for (const [key, value] of map) {
    if (isExpired(value)) map.delete(key)
  }

  while (map.size >= MAX_TRACKED_KEYS) {
    const firstKey = map.keys().next().value as string | undefined
    if (!firstKey) break
    map.delete(firstKey)
  }
}

function consumeBucket(map: Map<string, Bucket>, key: string, limit: number, windowMs: number): RateLimitDecision {
  const now = Date.now()
  pruneMap(map, (bucket) => bucket.resetAt <= now)

  const existing = map.get(key)
  if (!existing || existing.resetAt <= now) {
    map.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, retryAfterSeconds: 0 }
  }

  existing.count += 1

  if (existing.count > limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    }
  }

  return { allowed: true, retryAfterSeconds: 0 }
}

export function getClientFingerprint(request: Request) {
  const realIp = request.headers.get('x-real-ip')?.trim()
  const forwarded = request.headers.get('x-forwarded-for')
  const forwardedIp = forwarded?.split(',').map((part) => part.trim()).filter(Boolean).at(-1)
  const clientAddress = realIp || forwardedIp || 'unknown-client'

  return hash(clientAddress).slice(0, 16)
}

export function isAllowedContactOrigin(request: Request) {
  const origin = request.headers.get('origin')
  if (!origin) return true

  try {
    const incoming = new URL(origin)
    const configured = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://web.operadoresago.com')

    if (incoming.origin === configured.origin) return true

    if (process.env.NODE_ENV !== 'production') {
      return incoming.hostname === 'localhost' || incoming.hostname === '127.0.0.1'
    }
  } catch {
    return false
  }

  return false
}

export function checkContactRateLimit(request: Request, email: string): RateLimitDecision {
  const ipKey = `ip:${getClientFingerprint(request)}`
  const emailKey = `email:${hash(normalize(email)).slice(0, 24)}`

  const ipDecision = consumeBucket(ipBuckets, ipKey, IP_LIMIT, IP_WINDOW_MS)
  if (!ipDecision.allowed) return ipDecision

  return consumeBucket(emailBuckets, emailKey, EMAIL_LIMIT, EMAIL_WINDOW_MS)
}

export function evaluateContactSpam(input: ContactSpamInput): SpamDecision {
  const reasons: string[] = []
  let score = 0
  const now = Date.now()
  const elapsed = now - input.startedAt
  const message = normalize(input.message)
  const identity = normalize(`${input.name} ${input.company}`)
  const combined = `${identity} ${message}`
  const urlMatches = combined.match(/(?:https?:\/\/|www\.)/gi) ?? []

  if (elapsed >= 0 && elapsed < MIN_HUMAN_FILL_MS) {
    score += 2
    reasons.push('too-fast')
  }

  if (input.startedAt > now + MAX_CLOCK_SKEW_MS) {
    score += 4
    reasons.push('invalid-start-time')
  }

  if (urlMatches.length >= 4) {
    score += 5
    reasons.push('many-urls')
  } else if (urlMatches.length >= 2) {
    score += 2
    reasons.push('multiple-urls')
  }

  if (/<\/?(?:a|script|iframe|img|style|form|object|embed)\b/i.test(input.message)) {
    score += 4
    reasons.push('html-payload')
  }

  if (/\b(?:avis\s+de\s+pr[eé]l[eè]vement|pr[eé]l[eè]vement\s+sepa|mandat\s+sepa|facture\s+pour\s+pr[eé]l[eè]vement)\b/i.test(combined)) {
    score += 6
    reasons.push('known-phishing-pattern')
  }

  const commercialSpamPatterns = [
    /\b(?:casino|viagra|cialis|payday\s+loan|forex)\b/i,
    /\b(?:guest\s*post|backlinks?|link\s+building)\b/i,
    /\bseo\s+(?:service|services|agency|expert|specialist)\b/i,
    /\b(?:bitcoin|cryptocurrency)\s+(?:investment|trading|offer)\b/i,
  ]

  const suspiciousMatches = commercialSpamPatterns.filter((pattern) => pattern.test(combined)).length
  if (suspiciousMatches > 0) {
    score += suspiciousMatches * 3
    reasons.push('spam-keywords')
  }

  if (/https?:\/\//i.test(identity) || /www\./i.test(identity)) {
    score += 4
    reasons.push('url-in-identity')
  }

  const letters = (message.match(/\p{L}/gu) ?? []).length
  const compactLength = message.replace(/\s/g, '').length
  if (compactLength >= 40 && letters / compactLength < 0.35) {
    score += 2
    reasons.push('low-text-ratio')
  }

  return {
    block: score >= SPAM_BLOCK_SCORE,
    score,
    reasons,
  }
}

export function createContactFingerprint(input: Pick<ContactSpamInput, 'email' | 'company' | 'message'>) {
  return hash(`${normalize(input.email)}|${normalize(input.company)}|${normalize(input.message)}`)
}

export function wasRecentlySubmitted(fingerprint: string) {
  const now = Date.now()
  pruneMap(successfulFingerprints, (expiresAt) => expiresAt <= now)

  const expiresAt = successfulFingerprints.get(fingerprint)
  if (!expiresAt) return false

  if (expiresAt <= now) {
    successfulFingerprints.delete(fingerprint)
    return false
  }

  return true
}

export function rememberSuccessfulSubmission(fingerprint: string) {
  const now = Date.now()
  pruneMap(successfulFingerprints, (expiresAt) => expiresAt <= now)
  successfulFingerprints.set(fingerprint, now + DUPLICATE_WINDOW_MS)
}
