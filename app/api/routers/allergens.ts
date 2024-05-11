// /app/api/routers/allergen.ts
import { z } from 'zod'

import { t } from '../trpc'

const AllergenProductInput = z.object({
  productId: z.string(),
  allergenId: z.string(),
})

export const allergensRouter = t.router({
  addAllergenToProduct: t.procedure.input(AllergenProductInput).mutation(
    async ({ ctx, input }) =>
      await ctx.prisma.productAllergen.create({
        data: input,
      }),
  ),

  removeAllergenFromProduct: t.procedure.input(AllergenProductInput).mutation(
    async ({ ctx, input }) =>
      await ctx.prisma.productAllergen.deleteMany({
        where: {
          productId: input.productId,
          allergenId: input.allergenId,
        },
      }),
  ),
})
