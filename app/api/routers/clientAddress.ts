import { z } from 'zod'

import { router, procedure } from '../trpc'

const clientAddressSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  address: z.string(),
  number: z.string(),
  complement: z.string().nullable(),
  reference: z.string().nullable(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
})

export const clientAddressRouter = router({
  get: procedure
    .input(z.string())
    .output(clientAddressSchema)
    .query(({ ctx, input }) =>
      ctx.prisma.address.findUniqueOrThrow({
        where: { id: input, deletedAt: null },
      }),
    ),

  getAll: procedure.output(z.array(clientAddressSchema)).query(({ ctx }) =>
    ctx.prisma.address.findMany({
      where: { deletedAt: null },
    }),
  ),

  create: procedure
    .input(
      z.object({
        clientId: z.string(),
        address: z.string().min(1),
        number: z.string().min(1),
        complement: z.string().nullable(),
        reference: z.string().nullable(),
        city: z.string().min(1),
        state: z.string().min(1),
        zipCode: z.string().min(1),
      }),
    )
    .output(clientAddressSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.address.create({
        data: input,
      }),
    ),

  update: procedure
    .input(
      z.object({
        id: z.string(),
        clientId: z.string().optional(),
        address: z.string().min(1).optional(),
        number: z.string().min(1).optional(),
        complement: z.string().min(1).optional().optional(),
        reference: z.string().optional(),
        city: z.string().min(1).optional(),
        state: z.string().min(1).optional(),
        zipCode: z.string().min(1).optional(),
        country: z.string().min(1).optional(),
      }),
    )
    .output(clientAddressSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.address.update({
        where: { id: input.id },
        data: input,
      }),
    ),

  delete: procedure
    .input(z.string())
    .output(clientAddressSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.address.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      }),
    ),
})
