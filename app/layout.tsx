import './globals.css'
import { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Kid-Friendly Escondido',
  description: 'Discover kid-friendly activities in Escondido',
  openGraph: {
    title: 'Kid-Friendly Escondido',
    description: 'Discover kid-friendly activities in Escondido',
    url: 'https://kid-friendly-escondido.vercel.app/',
    siteName: 'Kid-Friendly Escondido',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/f6564f81-f3e4-4c44-8cc6-945bd9790008.png?token=GVN8U7PHkfCtn_AgYeox1jqYQjx28lUFd24mua30xjU&height=590&width=1200&expires=33260643549',
        width: 1200,
        height: 590,
        alt: 'Kid-Friendly Escondido',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kid-Friendly Escondido',
    description: 'Discover kid-friendly activities in Escondido',
    site: '@cynthiamcgillis',
    creator: '@cynthiamcgillis',
    images: ['https://opengraph.b-cdn.net/production/images/f6564f81-f3e4-4c44-8cc6-945bd9790008.png?token=GVN8U7PHkfCtn_AgYeox1jqYQjx28lUFd24mua30xjU&height=590&width=1200&expires=33260643549'],
  },
  metadataBase: new URL('https://kid-friendly-escondido.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        {children}
        <SpeedInsights />
        <Analytics mode="production" />
      </body>
    </html>
  )
}
