import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'
import { isContactServiceValue } from '@/lib/service-relations'

export const runtime = 'nodejs'

type SecureTransportOptions = Parameters<typeof nodemailer.createTransport>[0] & {
  disableFileAccess?: boolean
  disableUrlAccess?: boolean
}


const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  company: z.string().trim().min(2).max(120),
  phone: z.string().trim().max(40).optional().default(''),
  email: z.string().trim().email().max(160),
  service: z.string().trim().refine(isContactServiceValue, { message: 'Servicio inválido' }),
  sector: z.string().trim().max(120).optional().default('No especificado'),
  need: z.string().trim().max(120).optional().default(''),
  sourcePath: z.string().trim().max(240).optional().default('/contacto'),
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
    `Sector: ${data.sector || 'No especificado'}`,
    `Necesidad: ${data.need || 'No especificada'}`,
    '',
    'Mensaje:',
    data.message,
    '',
    `Origen: ${(process.env.NEXT_PUBLIC_SITE_URL || 'https://web.operadoresago.com')}${data.sourcePath || ''}`,
  ].join('\n')
}

function buildHtmlEmail(data: z.infer<typeof contactSchema>) {
  const safeName = escapeHtml(data.name)
  const safeCompany = escapeHtml(data.company)
  const safeEmail = escapeHtml(data.email)
  const safePhone = escapeHtml(data.phone || 'No especificado')
  const safeService = escapeHtml(data.service)
  const safeSector = escapeHtml(data.sector || 'No especificado')
  const safeNeed = escapeHtml(data.need || 'No especificada')
  const safeSourcePath = escapeHtml(data.sourcePath || '/contacto')
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
                      <tr><td style="color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Sector</td><td style="font-size:15px;">${safeSector}</td></tr>
                      <tr><td style="color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Necesidad</td><td style="font-size:15px;">${safeNeed}</td></tr>
                      <tr><td style="color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Origen</td><td style="font-size:13px;color:#64748b;">${safeSourcePath}</td></tr>
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


function buildConfirmationTextEmail(data: z.infer<typeof contactSchema>) {
  return [
    `Hola ${data.name},`,
    '',
    'Recibimos correctamente tu solicitud en AGO TECH.',
    `Servicio de interés: ${data.service}`,
    `Sector: ${data.sector || 'No especificado'}`,
    `Necesidad: ${data.need || 'No especificada'}`,
    '',
    'Nuestro equipo revisará la información y te responderá lo antes posible.',
    '',
    'Gracias por confiar en AGO TECH.',
    'https://web.operadoresago.com',
  ].join('\n')
}

function buildConfirmationHtmlEmail(data: z.infer<typeof contactSchema>) {
  const safeName = escapeHtml(data.name)
  const safeService = escapeHtml(data.service)
  const safeCompany = escapeHtml(data.company)
  const safeSector = escapeHtml(data.sector || 'No especificado')

  return `
    <!doctype html>
    <html lang="es">
      <body style="margin:0;padding:0;background:#f5f6ff;font-family:Arial,Helvetica,sans-serif;color:#111827;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f6ff;padding:36px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border-radius:24px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 22px 60px rgba(49,46,129,.12);">
                <tr>
                  <td style="padding:0;background:#0b1024;">
                    <div style="height:5px;background:#5b5df9;"></div>
                    <div style="padding:32px 36px;color:#ffffff;">
                      <div style="display:inline-block;padding:7px 11px;border-radius:999px;background:#312e81;color:#c7d2fe;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;">AGO TECH</div>
                      <div style="margin-top:18px;font-size:29px;line-height:1.2;font-weight:800;">Recibimos tu solicitud</div>
                      <div style="margin-top:10px;font-size:15px;line-height:1.7;color:#cbd5e1;">Tu mensaje ya está con nuestro equipo.</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:34px 36px;">
                    <div style="font-size:18px;line-height:1.5;font-weight:700;color:#111827;">Hola ${safeName},</div>
                    <div style="margin-top:12px;font-size:15px;line-height:1.8;color:#475569;">
                      Gracias por contactar a AGO TECH. Recibimos correctamente la solicitud de <strong style="color:#111827;">${safeCompany}</strong> y la revisaremos para responderte lo antes posible.
                    </div>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:26px;border-collapse:separate;">
                      <tr>
                        <td style="padding:18px 20px;border-radius:16px;background:#eef2ff;border:1px solid #c7d2fe;">
                          <div style="font-size:11px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;color:#4f46e5;">Servicio de interés</div>
                          <div style="margin-top:7px;font-size:16px;font-weight:800;color:#1e1b4b;">${safeService}</div>
                          <div style="margin-top:9px;font-size:12px;color:#6366f1;">Sector: ${safeSector}</div>
                        </td>
                      </tr>
                    </table>

                    <div style="margin-top:26px;padding:20px;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;">
                      <div style="font-size:14px;font-weight:800;color:#111827;">¿Qué sigue?</div>
                      <div style="margin-top:8px;font-size:14px;line-height:1.75;color:#64748b;">Nuestro equipo revisará los datos enviados y se pondrá en contacto contigo utilizando el correo o teléfono proporcionado.</div>
                    </div>

                    <div style="margin-top:30px;text-align:center;">
                      <a href="https://web.operadoresago.com" style="display:inline-block;padding:13px 22px;border-radius:12px;background:#4f46e5;color:#ffffff;text-decoration:none;font-size:14px;font-weight:800;">Conocer AGO TECH</a>
                    </div>

                    <div style="margin-top:30px;padding-top:22px;border-top:1px solid #e2e8f0;font-size:13px;line-height:1.7;color:#64748b;text-align:center;">
                      AGO TECH · Infraestructura digital para empresas<br />
                      <a href="mailto:contacto@operadoresago.com" style="color:#4f46e5;text-decoration:none;font-weight:700;">contacto@operadoresago.com</a>
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

    const safeMailFromName = mailFromName.replace(/[\r\n"]/g, '')
    const safeCompanyHeader = parsed.data.company.replace(/[\r\n]/g, ' ').trim()
    const safeSectorHeader = (parsed.data.sector || 'Sin sector').replace(/[\r\n]/g, ' ').trim()

    const internalInfo = await transporter.sendMail({
      from: `"${safeMailFromName}" <${mailFrom}>`,
      to: contactTo,
      replyTo: parsed.data.email,
      subject: `Nuevo prospecto web · ${safeSectorHeader} · ${parsed.data.service} · ${safeCompanyHeader}`,
      text: buildTextEmail(parsed.data),
      html: buildHtmlEmail(parsed.data),
    })

    console.info('[contact] Prospecto aceptado por SMTP:', internalInfo.messageId)

    let confirmationSent = false

    try {
      const confirmationInfo = await transporter.sendMail({
        from: `"${safeMailFromName}" <${mailFrom}>`,
        to: parsed.data.email,
        replyTo: contactTo,
        subject: 'Recibimos tu solicitud · AGO TECH',
        text: buildConfirmationTextEmail(parsed.data),
        html: buildConfirmationHtmlEmail(parsed.data),
      })

      confirmationSent = true
      console.info('[contact] Confirmación al prospecto aceptada por SMTP:', confirmationInfo.messageId)
    } catch (confirmationError) {
      console.warn(
        '[contact] Prospecto recibido, pero no fue posible enviar la confirmación:',
        confirmationError instanceof Error ? confirmationError.message : 'Error desconocido',
      )
    }

    return NextResponse.json({ ok: true, confirmationSent })
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
