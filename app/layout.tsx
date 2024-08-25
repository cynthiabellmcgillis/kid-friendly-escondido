import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

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
        url: 'https://opengraph.b-cdn.net/production/images/187200cf-867d-4ca7-ba01-fee494dd9983.png?token=uqqMZ54UVa72XPALPHISFZ6v7MLvncMd0vrIbNzdOmE&height=600&width=1200&expires=33260554069',
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
    site: 'cynthiamcgillis', // Replace with your actual Twitter handle
    creator: 'cynthiamcgillis', // Replace with your actual Twitter handle
    images: ['https://opengraph.b-cdn.net/production/images/187200cf-867d-4ca7-ba01-fee494dd9983.png?token=uqqMZ54UVa72XPALPHISFZ6v7MLvncMd0vrIbNzdOmE&height=600&width=1200&expires=33260554069'],
  },
  metadataBase: new URL('https://kid-friendly-escondido.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
