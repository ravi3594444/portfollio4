import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://raviportfollio.vercel.app'),
  title: 'Ravi Kumar — AI Engineer & Product Builder',
  description: 'Ravi Kumar builds dependable AI agents, model workflows, and polished full-stack products from zero to one.',
  authors: [{ name: 'Ravi Kumar' }],
  creator: 'Ravi Kumar',
  keywords: ['AI engineer', 'AI agents', 'MCP', 'multi-agent systems', 'full-stack developer'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Ravi Kumar Portfolio',
    title: 'Ravi Kumar — AI Engineer & Product Builder',
    description: 'Dependable AI agents, model workflows, and polished full-stack products built from zero to one.',
  },
  twitter: {
    card: 'summary',
    title: 'Ravi Kumar — AI Engineer & Product Builder',
    description: 'Dependable AI agents, model workflows, and polished full-stack products built from zero to one.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#06070a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: 'window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)}' }} />
        <script defer src="/_vercel/insights/script.js" />
      </body>
    </html>
  )
}
