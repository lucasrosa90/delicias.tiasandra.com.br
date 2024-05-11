import { inferAsyncReturnType } from '@trpc/server'

import prisma from './prisma'

export async function createContext({ req, res }) {
  return {
    req,
    res,
    prisma,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
