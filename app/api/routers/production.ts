// /app/api/routers/production.ts
import { t } from '../trpc'
import { z } from 'zod'

const ProductionInput = z.object({
  productId: z.string(),
  quantity: z.number(),
  productionDate: z.date(),
})

export const productionRouter = t.router({
  logProduction: t.procedure.input(ProductionInput).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.production.create({
      data: input,
    })
  }),

  updateProduction: t.procedure.input(ProductionInput.extend({ id: z.string() })).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.production.update({
      where: { id: input.id },
      data: input,
    })
  }),

  deleteProduction: t.procedure.input(z.string()).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.production.delete({
      where: { id: input },
    })
  }),
})