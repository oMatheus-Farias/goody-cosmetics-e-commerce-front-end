'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

import { queryClient } from '@/configs/react-query-client'

interface TProps {
  children: ReactNode
}

export function ReactQueryProvider({ children }: TProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
