import React from 'react'

import MainLayout from '@/core/components/species/MainLayout'

export default function PublicLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <>
      <MainLayout>{children}</MainLayout>
      {modal}
    </>
  )
}
