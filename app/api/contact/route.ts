import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

export const runtime = 'nodejs'

type SecureTransportOptions = Parameters<typeof nodemailer.createTransport>[0] & {
  disableFileAccess?: boolean
  disableUrlAccess?: boolean
}

const services = [
  'Portal cautivo',
  'WiFi administrado',
  'Diseño e implementación de redes',
  'Desarrollo web o aplicación',
  'Monitoreo tecnológico',
  'Otro servicio',
] as const

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  company: z.string().trim().min(2).max(120),
  phone: z.string().trim().max(40).optional().default(''),
  email: z.string().trim().email().max(160),
  service: z.enum(services),
  message: z.string().trim().min(10).max(1500),
  website: z.string().max(0).optional().default(''),
}).strict()

type RequiredSmtpVariable =
  | 'SMTP_HOST'
  | 'SMTP_USER'
  | 'SMTP_PASSWORD'
  | 'MAIL_FROM'
  | 'CONTACT_TO'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function requiredEnv(name: RequiredSmtpVariable) {
  const value = process.env[name]?.trim()

  if (!value) {
    throw new Error(`Missing required SMTP environment variable: ${name}`)
  }

  return value
}

function buildTextEmail(data: z.infer<typeof contactSchema>) {
  return [
    'NUEVO PROSPECTO — AGO TECH',
    '',
    `Nombre: ${data.name}`,
    `Empresa: ${data.company}`,
    `Correo: ${data.email}`,
    `Teléfono: ${data.phone || 'No especificado'}`,
    `Servicio de interés: ${data.service}`,
    '',
    'Mensaje:',
    data.message,
    '',
    `Origen: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://web.operadoresago.com'}`,
  ].join('\n')
}

function buildHtmlEmail(data: z.infer<typeof contactSchema>) {
  const safeName = escapeHtml(data.name)
  const safeCompany = escapeHtml(data.company)
  const safeEmail = escapeHtml(data.email)
  const safePhone = escapeHtml(data.phone || 'No especificado')
  const safeService = escapeHtml(data.service)
  const safeMessage = escapeHtml(data.message).replaceAll('\n', '<br />')

  return `
    <!doctype html>
    <html lang="es">
      <body style="margin:0;padding:0;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f6fb;padding:32px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border-radius:22px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 18px 50px rgba(15,23,42,.08);">
                <tr>
                  <td style="padding:30px 34px;background:#081225;color:#ffffff;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#60a5fa;margin-bottom:10px;">AGO TECH</div>
                    <div style="font-size:27px;line-height:1.2;font-weight:800;">Nuevo prospecto desde la web</div>
                    <div style="margin-top:10px;font-size:15px;line-height:1.6;color:#cbd5e1;">Solicitud recibida desde web.operadoresago.com</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:30px 34px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 10px;">
                      <tr><td style="width:190px;color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Nombre</td><td style="font-size:15px;font-weight:700;">${safeName}</td></tr>
                      <tr><td style="color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Empresa</td><td style="font-size:15px;">${safeCompany}</td></tr>
                      <tr><td style="color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Correo</td><td style="font-size:15px;"><a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a></td></tr>
                      <tr><td style="color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Teléfono</td><td style="font-size:15px;">${safePhone}</td></tr>
                      <tr><td style="color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Servicio</td><td style="font-size:15px;"><span style="display:inline-block;padding:7px 12px;border-radius:999px;background:#eff6ff;color:#1d4ed8;font-weight:700;">${safeService}</span></td></tr>
                    </table>

                    <div style="margin-top:22px;padding-top:22px;border-top:1px solid #e2e8f0;">
                      <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#64748b;margin-bottom:10px;">Mensaje</div>
                      <div style="padding:18px 20px;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;font-size:15px;line-height:1.7;color:#1e293b;">${safeMessage}</div>
                    </div>

                    <div style="margin-top:24px;font-size:13px;line-height:1.6;color:#64748b;">
                      Responde este correo para contestar directamente a <strong>${safeName}</strong>.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

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

  // Honeypot: los usuarios reales nunca completan este campo oculto.
  // A los bots se les responde OK sin enviar correo para no revelar la protección.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true })
  }

  try {
    const smtpHost = requiredEnv('SMTP_HOST')
    const smtpUser = requiredEnv('SMTP_USER')
    const smtpPassword = requiredEnv('SMTP_PASSWORD')
    const mailFrom = requiredEnv('MAIL_FROM')
    const contactTo = requiredEnv('CONTACT_TO')
    const smtpPort = Number(process.env.SMTP_PORT || '587')
    const smtpSecure = process.env.SMTP_SECURE === 'true'
    const smtpRequireTls = process.env.SMTP_REQUIRE_TLS !== 'false'
    const mailFromName = process.env.MAIL_FROM_NAME?.trim() || 'AGO TECH'

    if (!Number.isInteger(smtpPort) || smtpPort <= 0 || smtpPort > 65535) {
      throw new Error('Invalid SMTP_PORT configuration')
    }

    const transportOptions = {
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      requireTLS: smtpRequireTls,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
      disableFileAccess: true,
      disableUrlAccess: true,
    } as SecureTransportOptions

    const transporter = nodemailer.createTransport(transportOptions)

    await transporter.sendMail({
      from: `"${mailFromName.replaceAll('"', '')}" <${mailFrom}>`,
      to: contactTo,
      replyTo: parsed.data.email,
      subject: `Nuevo prospecto web · ${parsed.data.service} · ${parsed.data.company}`,
      text: buildTextEmail(parsed.data),
      html: buildHtmlEmail(parsed.data),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(
      '[contact] No fue posible enviar el correo SMTP:',
      error instanceof Error ? error.message : 'Error desconocido',
    )

    return NextResponse.json(
      { error: 'El servicio de contacto no está disponible temporalmente.' },
      { status: 503 },
    )
  }
}
