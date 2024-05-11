// /app/api/routers/category.ts
import { t } from '../trpc'
import { z } from 'zod'

const CategoryInput = z.object({
  name: z.string(),
})

const CategoryOutput = z.object({
  id: z.string(),
  name: z.string(),
})

export const categoryRouter = t.router({
  getAll: t.procedure
    .query(async ({ ctx }) => {
      return await ctx.prisma.category.findMany({
        where: { deletedAt: null },
        select: { id: true, name: true },
      })
    })
    .output(z.array(CategoryOutput)),

  get: t.procedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.category.findUnique({
        where: { id: input, deletedAt: null },
        select: { id: true, name: true },
      })
    })
    .output(CategoryOutput.nullable()),

  create: t.procedure
    .input(CategoryInput)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.category.create({
        data: input,
        select: { id: true, name: true },
      })
    })
    .output(CategoryOutput),

  update: t.procedure
    .input(CategoryInput.extend({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.category.update({
        where: { id: input.id, deletedAt: null },
        data: { name: input.name },
        select: { id: true, name: true },
      })
    })
    .output(CategoryOutput),

  delete: t.procedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.category.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      })
      return { id: input }
    })
    .output(z.object({ id: z.string() })),
})
