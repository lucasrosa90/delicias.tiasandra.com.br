import { z } from 'zod'

import { router, procedure } from '../trpc'

const saleDetailSchema = z.object({
  id: z.string(),
  saleId: z.string(),
  productId: z.string(),
  quantity: z.number(),
  salePrice: z.string(), // check string as number, probably Decimal
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
})

export const saleDetailRouter = router({
  get: procedure
    .input(z.string())
    .output(saleDetailSchema)
    .query(({ ctx, input }) =>
      ctx.prisma.saleDetail.findUniqueOrThrow({
        where: { id: input, deletedAt: null },
      }),
    ),

  getAll: procedure.output(z.array(saleDetailSchema)).query(({ ctx }) =>
    ctx.prisma.saleDetail.findMany({
      where: { deletedAt: null },
    }),
  ),

  create: procedure
    .input(
      z.object({
        saleId: z.string(),
        productId: z.string(),
        quantity: z.number().min(1),
        salePrice: z.string().min(1), // check string as number, probably Decimal
      }),
    )
    .output(saleDetailSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.saleDetail.create({
        data: input,
      }),
    ),

  update: procedure
    .input(
      z.object({
        id: z.string(),
        saleId: z.string().optional(),
        productId: z.string().optional(),
        quantity: z.number().min(1).optional(),
        salePrice: z.string().min(1).optional(), // check string as number, probably Decimal
      }),
    )
    .output(saleDetailSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.saleDetail.update({
        where: { id: input.id },
        data: input,
      }),
    ),

  delete: procedure
    .input(z.string())
    .output(saleDetailSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.saleDetail.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      }),
    ),
})
