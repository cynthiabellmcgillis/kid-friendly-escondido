import React from 'react'

export const metadata = {
  title: 'Kid Friendly Escondido',
  description: 'Discover kid-friendly activities in Escondido',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
