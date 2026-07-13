import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  message: z.string().trim().min(10).max(2500),
})

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Verifica los datos del formulario.' },
      { status: 400 },
    )
  }

  const contactApiUrl =
    process.env.CONTACT_API_URL || 'http://10.10.0.49:3001/contact'

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10_000)

  try {
    const upstream = await fetch(contactApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
      cache: 'no-store',
      signal: controller.signal,
    })

    const contentType = upstream.headers.get('content-type') || 'application/json'
    const responseBody = await upstream.text()

    return new Response(responseBody, {
      status: upstream.status,
      headers: { 'Content-Type': contentType },
    })
  } catch {
    return NextResponse.json(
      { error: 'El servicio de contacto no está disponible temporalmente.' },
      { status: 502 },
    )
  } finally {
    clearTimeout(timeout)
  }
}
