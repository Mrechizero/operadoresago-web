import type { Metadata } from 'next'

const DEFAULT_SITE_URL = 'https://web.operadoresago.com'
const SOCIAL_IMAGE = '/social-image.avif'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL).replace(/\/+$/, '')

type PageMetadataOptions = {
  title: string
  description: string
  path?: string
  imageAlt?: string
  keywords?: string[]
}

function pageUrl(path = '/') {
  if (!path || path === '/') return SITE_URL
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function createPageMetadata({
  title,
  description,
  path = '/',
  imageAlt = 'Operadores AGO',
  keywords,
}: PageMetadataOptions): Metadata {
  const url = pageUrl(path)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'es_MX',
      siteName: 'Operadores AGO',
      url,
      images: [
        {
          url: SOCIAL_IMAGE,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
  }
}
