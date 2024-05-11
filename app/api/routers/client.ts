// /app/api/routers/client.ts
import { t } from '../trpc'
import { z } from 'zod'

const ClientInput = z.object({
  name: z.string(),
})

const ClientOutput = z.object({
  id: z.string(),
  name: z.string(),
})

export const clientRouter = t.router({
  getAll: t.procedure
    .query(async ({ ctx }) => {
      return await ctx.prisma.client.findMany({
        where: { deletedAt: null },
        select: { id: true, name: true },
      })
    })
    .output(z.array(ClientOutput)),

  get: t.procedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.client.findUnique({
        where: { id: input, deletedAt: null },
        select: { id: true, name: true },
      })
    })
    .output(ClientOutput.nullable()),

  create: t.procedure
    .input(ClientInput)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.client.create({
        data: input,
        select: { id: true, name: true },
      })
    })
    .output(ClientOutput),

  update: t.procedure
    .input(ClientInput.extend({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.client.update({
        where: { id: input.id, deletedAt: null },
        data: { name: input.name },
        select: { id: true, name: true },
      })
    })
    .output(ClientOutput),

  delete: t.procedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.client.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      })
      return { id: input }
    })
    .output(z.object({ id: z.string() })),
})
