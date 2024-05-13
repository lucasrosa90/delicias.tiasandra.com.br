import { z } from 'zod'

import { router, procedure } from '../trpc'

const allergenSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
})

export const allergenRouter = router({
  get: procedure
    .input(z.string())
    .output(allergenSchema)
    .query(({ ctx, input }) =>
      ctx.prisma.allergen.findUniqueOrThrow({
        where: { id: input, deletedAt: null },
      }),
    ),

  getAll: procedure.output(z.array(allergenSchema)).query(({ ctx }) =>
    ctx.prisma.allergen.findMany({
      where: { deletedAt: null },
    }),
  ),

  create: procedure
    .input(
      z.object({
        name: z.string().min(1),
      }),
    )
    .output(allergenSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.allergen.create({
        data: input,
      }),
    ),

  update: procedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).optional(),
      }),
    )
    .output(allergenSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.allergen.update({
        where: { id: input.id },
        data: input,
      }),
    ),

  delete: procedure
    .input(z.string())
    .output(allergenSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.allergen.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      }),
    ),
})
