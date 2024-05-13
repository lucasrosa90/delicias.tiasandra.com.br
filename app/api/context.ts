import prisma from './prisma'

type Options = { req: Request; res: Response }

export function createContext(opts?: Options) {
  return { ...opts, prisma }
}

export type Context = typeof createContext
