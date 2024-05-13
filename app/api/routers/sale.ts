import { z } from 'zod'

import { router, procedure } from '../trpc'

const saleSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  address: z.string(),
  number: z.string(),
  complement: z.string().nullable(),
  reference: z.string().nullable(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  saleDate: z.date(),
  paymentStatus: z.string(),
  paymentMethod: z.string(),
  deliveryStatus: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
})

export const saleRouter = router({
  get: procedure
    .input(z.string())
    .output(saleSchema)
    .query(({ ctx, input }) =>
      ctx.prisma.sale.findUniqueOrThrow({
        where: { id: input, deletedAt: null },
      }),
    ),

  getAll: procedure.output(z.array(saleSchema)).query(({ ctx }) =>
    ctx.prisma.sale.findMany({
      where: { deletedAt: null },
    }),
  ),

  create: procedure
    .input(
      z.object({
        clientId: z.string(),
        address: z.string(),
        number: z.string(),
        complement: z.string().optional(),
        reference: z.string().optional(),
        city: z.string(),
        state: z.string(),
        zipCode: z.string(),
        saleDate: z.date(),
        paymentStatus: z.string(),
        paymentMethod: z.string(),
        deliveryStatus: z.string(),
      }),
    )
    .output(saleSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.sale.create({
        data: input,
      }),
    ),

  update: procedure
    .input(
      z.object({
        id: z.string(),
        clientId: z.string().optional(),
        address: z.string().optional(),
        number: z.string().optional(),
        complement: z.string().optional(),
        reference: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        zipCode: z.string().optional(),
        saleDate: z.date().optional(),
        paymentStatus: z.string().optional(),
        paymentMethod: z.string().optional(),
        deliveryStatus: z.string().optional(),
      }),
    )
    .output(saleSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.sale.update({
        where: { id: input.id },
        data: input,
      }),
    ),

  delete: procedure
    .input(z.string())
    .output(saleSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.sale.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      }),
    ),
})
