// /app/api/routers/sale.ts
import { t } from '../trpc'
import { z } from 'zod'

const SaleInput = z.object({
  clientId: z.string(),
  totalAmount: z.number(),
})

const SaleOutput = z.object({
  id: z.string(),
  clientId: z.string(),
  totalAmount: z.number(),
})

export const saleRouter = t.router({
  getAll: t.procedure
    .query(async ({ ctx }) => {
      return await ctx.prisma.sale.findMany({
        where: { deletedAt: null },
        select: { id: true, clientId: true, totalAmount: true },
      })
    })
    .output(z.array(SaleOutput)),

  get: t.procedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.sale.findUnique({
        where: { id: input, deletedAt: null },
        select: { id: true, clientId: true, totalAmount: true },
      })
    })
    .output(SaleOutput.nullable()),

  create: t.procedure
    .input(SaleInput)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.sale.create({
        data: input,
        select: { id: true, clientId: true, totalAmount: true },
      })
    })
    .output(SaleOutput),

  update: t.procedure
    .input(SaleInput.extend({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.sale.update({
        where: { id: input.id, deletedAt: null },
        data: input,
        select: { id: true, clientId: true, totalAmount: true },
      })
    })
    .output(SaleOutput),

  delete: t.procedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.sale.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      })
      return { id: input }
    })
    .output(z.object({ id: z.string() })),
})
