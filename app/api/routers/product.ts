import { z } from 'zod'

import { router, procedure } from '../trpc'

const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  ingredients: z.string(),
  image: z.string().nullable(),
  price: z.string().min(1), // check string as number, probably Decimal
  categoryId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
})

export const productRouter = router({
  get: procedure
    .input(z.string())
    .output(productSchema)
    .query(({ ctx, input }) =>
      ctx.prisma.product.findUniqueOrThrow({
        where: { id: input, deletedAt: null },
      }),
    ),

  getAll: procedure.output(z.array(productSchema)).query(({ ctx }) =>
    ctx.prisma.product.findMany({
      where: { deletedAt: null },
      include: { category: true }, // Include related category data
    }),
  ),

  create: procedure
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string(),
        ingredients: z.string(),
        image: z.string().optional(),
        price: z.string().min(1), // check string as number, probably Decimal
        categoryId: z.string(),
      }),
    )
    .output(productSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.product.create({
        data: input,
      }),
    ),

  update: procedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).optional(),
        description: z.string().optional(),
        ingredients: z.string().optional(),
        image: z.string().optional(),
        price: z.string().min(1).optional(), // check string as number, probably Decimal
        categoryId: z.string().optional(),
      }),
    )
    .output(productSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.product.update({
        where: { id: input.id },
        data: input,
      }),
    ),

  delete: procedure
    .input(z.string())
    .output(productSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.product.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      }),
    ),
})
