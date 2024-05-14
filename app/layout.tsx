import type { Metadata, Viewport } from 'next'

import './globals.css'

import { SessionProvider } from 'next-auth/react'

import { auth } from '@/auth'
import { Toaster } from '@/components/ui/toaster'

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

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className="[&:has(#backdrop)]:overflow-hidden">
          <Providers>{children}</Providers>
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  )
}
