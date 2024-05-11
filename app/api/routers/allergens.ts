// /app/api/routers/allergen.ts
import { t } from '../trpc'
import { z } from 'zod'

const AllergenProductInput = z.object({
  productId: z.string(),
  allergenId: z.string(),
})

export const allergensRouter = t.router({
  addAllergenToProduct: t.procedure.input(AllergenProductInput).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.productAllergen.create({
      data: input,
    })
  }),

  removeAllergenFromProduct: t.procedure.input(AllergenProductInput).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.productAllergen.deleteMany({
      where: {
        productId: input.productId,
        allergenId: input.allergenId,
      },
    })
  }),
})
