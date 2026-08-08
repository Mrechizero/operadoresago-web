declare module 'nodemailer' {
  type TransportOptions = {
    host: string
    port: number
    secure?: boolean
    requireTLS?: boolean
    auth?: {
      user: string
      pass: string
    }
    connectionTimeout?: number
    greetingTimeout?: number
    socketTimeout?: number
  }

  type MailOptions = {
    from: string
    to: string
    replyTo?: string
    subject: string
    text?: string
    html?: string
  }

  type SentMessageInfo = {
    messageId?: string
    accepted?: string[]
    rejected?: string[]
    response?: string
  }

  type Transporter = {
    sendMail(options: MailOptions): Promise<SentMessageInfo>
  }

  const nodemailer: {
    createTransport(options: TransportOptions): Transporter
  }

  export default nodemailer
}
