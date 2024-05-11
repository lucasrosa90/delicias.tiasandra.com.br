import { CreateNextContextOptions } from '@trpc/server/adapters/next'

import prisma from './prisma'

export async function createContext({ req, res }: CreateNextContextOptions) {
  return {
    req,
    res,
    prisma,
  }
}

export type Context = typeof createContext
