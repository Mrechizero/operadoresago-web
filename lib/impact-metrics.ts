import { promises as fs } from 'node:fs'
import path from 'node:path'

const BASE_VISITS = 999
const WEEKLY_INCREMENT = 20
const START_DATE_UTC = Date.UTC(2026, 6, 20)
const WEEK_MS = 7 * 24 * 60 * 60 * 1000

const dataDirectory =
  process.env.IMPACT_METRICS_DATA_DIR || path.join(process.cwd(), 'data')
const dataFile = path.join(dataDirectory, 'impact-metrics.json')

type PersistedMetrics = {
  visits: number
}

export type PublicVisitMetrics = {
  totalVisits: number
  weeklyIncrement: number
}

let writeQueue: Promise<unknown> = Promise.resolve()

function elapsedWeeks(now = Date.now()) {
  return Math.max(0, Math.floor((now - START_DATE_UTC) / WEEK_MS))
}

async function readPersistedMetrics(): Promise<PersistedMetrics> {
  await fs.mkdir(dataDirectory, { recursive: true })

  try {
    const raw = await fs.readFile(dataFile, 'utf8')
    const parsed = JSON.parse(raw) as {
      visits?: unknown
      entries?: unknown
    }

    // Compatibilidad con el primer parche, que guardaba el total como "entries".
    const storedValue = parsed.visits ?? parsed.entries

    return {
      visits:
        typeof storedValue === 'number' && Number.isFinite(storedValue)
          ? Math.max(0, Math.floor(storedValue))
          : 0,
    }
  } catch (error) {
    const nodeError = error as NodeJS.ErrnoException

    if (nodeError.code !== 'ENOENT') throw error

    return { visits: 0 }
  }
}

async function writePersistedMetrics(metrics: PersistedMetrics) {
  await fs.mkdir(dataDirectory, { recursive: true })
  const temporaryFile = `${dataFile}.${process.pid}.${Date.now()}.tmp`

  await fs.writeFile(temporaryFile, JSON.stringify(metrics, null, 2), 'utf8')
  await fs.rename(temporaryFile, dataFile)
}

function toPublicMetrics(metrics: PersistedMetrics): PublicVisitMetrics {
  return {
    totalVisits:
      BASE_VISITS +
      elapsedWeeks() * WEEKLY_INCREMENT +
      metrics.visits,
    weeklyIncrement: WEEKLY_INCREMENT,
  }
}

export async function getVisitMetrics(): Promise<PublicVisitMetrics> {
  const metrics = await readPersistedMetrics()
  return toPublicMetrics(metrics)
}

export async function registerVisit(): Promise<PublicVisitMetrics> {
  const operation = writeQueue.then(async () => {
    const current = await readPersistedMetrics()
    const next = { visits: current.visits + 1 }

    await writePersistedMetrics(next)
    return toPublicMetrics(next)
  })

  writeQueue = operation.catch(() => undefined)
  return operation
}
