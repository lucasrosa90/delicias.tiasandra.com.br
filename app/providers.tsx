'use client'

import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/utils/queryClient'
import { trpc, trpcClient } from '@/utils/trpc'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <trpc.Provider
      client={trpcClient}
      queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
