import { z } from 'zod'

import { router, procedure } from '../trpc'

const productionSchema = z.object({
  id: z.string(),
  productId: z.string(),
  productionDate: z.date(),
  quantity: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
})

export const productionRouter = router({
  get: procedure
    .input(z.string())
    .output(productionSchema)
    .query(({ ctx, input }) =>
      ctx.prisma.production.findUniqueOrThrow({
        where: { id: input, deletedAt: null },
      }),
    ),

  getAll: procedure
    .input(z.string())
    .output(z.array(productionSchema))
    .query(({ ctx, input }) =>
      ctx.prisma.production.findMany({
        where: { productId: input, deletedAt: null },
        orderBy: { productionDate: 'desc' },
      }),
    ),

  create: procedure
    .input(
      z.object({
        productId: z.string(),
        quantity: z.number().min(1),
        productionDate: z.coerce.date(),
      }),
    )
    .output(productionSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.production.create({
        data: input,
      }),
    ),

  update: procedure
    .input(
      z.object({
        id: z.string(),
        productId: z.string().optional(),
        quantity: z.number().min(1).optional(),
      }),
    )
    .output(productionSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.production.update({
        where: { id: input.id },
        data: input,
      }),
    ),

  delete: procedure
    .input(z.string())
    .output(productionSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.production.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      }),
    ),
})
