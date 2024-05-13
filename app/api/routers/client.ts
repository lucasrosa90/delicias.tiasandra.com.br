import { z } from 'zod'

import { router, procedure } from '../trpc'

const clientSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
})

export const clientRouter = router({
  get: procedure
    .input(z.string())
    .output(clientSchema)
    .query(({ ctx, input }) =>
      ctx.prisma.client.findUniqueOrThrow({
        where: { id: input, deletedAt: null },
      }),
    ),

  getAll: procedure.output(z.array(clientSchema)).query(({ ctx }) =>
    ctx.prisma.client.findMany({
      where: { deletedAt: null },
    }),
  ),

  create: procedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
      }),
    )
    .output(clientSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.client.create({
        data: input,
      }),
    ),

  update: procedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).optional(),
        email: z.string().email().optional(),
      }),
    )
    .output(clientSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.client.update({
        where: { id: input.id },
        data: input,
      }),
    ),

  delete: procedure
    .input(z.string())
    .output(clientSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.client.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      }),
    ),
})
