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
        url: '/Kid Friendly Escondido.png',
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
    images: ['/Kid Friendly Escondido.png'],
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
