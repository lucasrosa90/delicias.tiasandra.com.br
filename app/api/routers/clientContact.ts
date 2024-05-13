import { z } from 'zod'

import { router, procedure } from '../trpc'

const clientContactSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  contactType: z.string(),
  contactValue: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
})

export const clientContactRouter = router({
  get: procedure
    .input(z.string())
    .output(clientContactSchema)
    .query(({ ctx, input }) =>
      ctx.prisma.clientContact.findUniqueOrThrow({
        where: { id: input, deletedAt: null },
      }),
    ),

  getAll: procedure.output(z.array(clientContactSchema)).query(({ ctx }) =>
    ctx.prisma.clientContact.findMany({
      where: { deletedAt: null },
    }),
  ),

  create: procedure
    .input(
      z.object({
        clientId: z.string(),
        contactType: z.string().min(1),
        contactValue: z.string().min(1),
      }),
    )
    .output(clientContactSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.clientContact.create({
        data: input,
      }),
    ),

  update: procedure
    .input(
      z.object({
        id: z.string(),
        clientId: z.string().optional(),
        type: z.string().min(1).optional(),
        value: z.string().min(1).optional(),
      }),
    )
    .output(clientContactSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.clientContact.update({
        where: { id: input.id },
        data: input,
      }),
    ),

  delete: procedure
    .input(z.string())
    .output(clientContactSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.clientContact.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      }),
    ),
})
