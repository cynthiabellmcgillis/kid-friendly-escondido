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
    images: [
      {
        url: 'https://i.imgur.com/a/FFuC5zO.jpg',
        width: 1200,
        height: 630,
        alt: 'Kid Friendly Escondido - Fun activities for children',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kid Friendly Escondido',
    description: 'Discover kid-friendly activities in Escondido',
    images: ['https://i.imgur.com/kvOwmmr.png'],
  },
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
