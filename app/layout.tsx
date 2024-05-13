import type { Metadata, Viewport } from 'next'
import { Oswald } from 'next/font/google'

import './globals.css'
import MainLayout from '@/core/components/species/MainLayout'

import Providers from './providers'

const oswald = Oswald({ subsets: ['latin'] })

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

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} [&:has(#backdrop)]:overflow-hidden`}>
        <Providers>
          <MainLayout>{children}</MainLayout>
          {modal}
        </Providers>
      </body>
    </html>
  )
}
