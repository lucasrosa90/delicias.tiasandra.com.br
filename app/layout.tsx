import type { Metadata, Viewport } from 'next'

import './globals.css'

import Providers from './providers'

export const metadata: Metadata = {
  title: {
    default: 'Delícias da Tia Sandra',
    template: '%s | Delícias da Tia Sandra',
  },
  description: 'Congelados saudáveis, praticidade e sabor para o seu dia a dia.',
  formatDetection: {
    address: false,
    date: false,
    email: false,
    telephone: false,
    url: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff', // '#f8bb21'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="[&:has(#backdrop)]:overflow-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
