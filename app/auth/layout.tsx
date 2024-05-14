import { redirect } from 'next/navigation'

import { auth } from '@/auth'

export default async function AdminPublicLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()

  if (session) {
    redirect('/admin')
  }

  return <main className="flex h-screen w-screen items-center justify-center">{children}</main>
}
