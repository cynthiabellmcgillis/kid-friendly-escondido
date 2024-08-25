import './globals.css'
import { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  title: 'Kid Friendly Escondido',
  description: 'Discover kid-friendly activities in Escondido',
  openGraph: {
    title: 'Kid Friendly Escondido',
    description: 'Discover kid-friendly activities in Escondido',
    url: 'https://kid-friendly-escondido.vercel.app/',
    siteName: 'Kid Friendly Escondido',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/6b3db2ff-ebac-4b39-8330-407c16ed66e6.png?token=kHTv_1mexwvh2LtWcee13rw7Vt4EJvJYEI4sgpAN708&height=600&width=1200&expires=33260614490',
        width: 1200,
        height: 600,
        alt: 'Kid Friendly Escondido',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kid Friendly Escondido',
    description: 'Discover kid-friendly activities in Escondido',
    site: '@cynthiamcgillis',
    creator: '@cynthiamcgillis',
    images: ['https://opengraph.b-cdn.net/production/images/6b3db2ff-ebac-4b39-8330-407c16ed66e6.png?token=kHTv_1mexwvh2LtWcee13rw7Vt4EJvJYEI4sgpAN708&height=600&width=1200&expires=33260614490'],
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
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
