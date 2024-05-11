import { initTRPC } from '@trpc/server'

import { CustomSuperJSON } from '@/utils/superjson.custom'

import { Context } from './context'

export const t = initTRPC.context<Context>().create({
  transformer: CustomSuperJSON,
  errorFormatter({ shape }) {
    // Customize the error format if necessary
    return shape // Default error shaping
  },
})

export const router = t.router
export const procedure = t.procedure
