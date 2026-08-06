import { NextRequest, NextResponse } from 'next/server'
import { getVisitMetrics, registerVisit } from '@/lib/impact-metrics'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SESSION_COOKIE = 'ago_visit_counted'
const noStoreHeaders = {
  'Cache-Control': 'no-store, no-cache, must-revalidate',
}

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get('origin')
  if (!origin) return true

  const allowedOrigins = new Set<string>([new URL(request.url).origin])
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (configuredSiteUrl) {
    try {
      allowedOrigins.add(new URL(configuredSiteUrl).origin)
    } catch {
      // Si la variable está mal formada, se ignora y se conserva el origen actual.
    }
  }

  const forwardedHost =
    request.headers.get('x-forwarded-host') || request.headers.get('host')
  const forwardedProto =
    request.headers.get('x-forwarded-proto') ||
    new URL(request.url).protocol.replace(':', '')

  if (forwardedHost) {
    allowedOrigins.add(`${forwardedProto}://${forwardedHost}`)
  }

  return allowedOrigins.has(origin)
}

export async function GET() {
  try {
    const metrics = await getVisitMetrics()
    return NextResponse.json(metrics, { headers: noStoreHeaders })
  } catch (error) {
    console.error('No fue posible consultar el contador:', error)
    return NextResponse.json(
      { error: 'No fue posible consultar el contador.' },
      { status: 500, headers: noStoreHeaders },
    )
  }
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { error: 'Origen no permitido.' },
      { status: 403, headers: noStoreHeaders },
    )
  }

  try {
    const alreadyCounted = request.cookies.get(SESSION_COOKIE)?.value === '1'
    const metrics = alreadyCounted
      ? await getVisitMetrics()
      : await registerVisit()

    const response = NextResponse.json(metrics, {
      headers: noStoreHeaders,
    })

    if (!alreadyCounted) {
      response.cookies.set({
        name: SESSION_COOKIE,
        value: '1',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      })
    }

    return response
  } catch (error) {
    console.error('No fue posible registrar la visita:', error)
    return NextResponse.json(
      { error: 'No fue posible registrar la visita.' },
      { status: 500, headers: noStoreHeaders },
    )
  }
}
