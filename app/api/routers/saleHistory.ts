import { z } from 'zod'

import { router, procedure } from '../trpc'

const saleHistorySchema = z.object({
  id: z.string(),
  saleId: z.string(),
  status: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
})

export const saleHistoryRouter = router({
  get: procedure
    .input(z.string())
    .output(saleHistorySchema)
    .query(({ ctx, input }) =>
      ctx.prisma.saleHistory.findUniqueOrThrow({
        where: { id: input, deletedAt: null },
      }),
    ),

  getAll: procedure.output(z.array(saleHistorySchema)).query(({ ctx }) =>
    ctx.prisma.saleHistory.findMany({
      where: { deletedAt: null },
    }),
  ),

  create: procedure
    .input(
      z.object({
        saleId: z.string(),
        status: z.string().min(1),
        timestamp: z.date(),
      }),
    )
    .output(saleHistorySchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.saleHistory.create({
        data: input,
      }),
    ),

  update: procedure
    .input(
      z.object({
        id: z.string(),
        saleId: z.string().optional(),
        status: z.string().min(1).optional(),
        timestamp: z.date().optional(),
      }),
    )
    .output(saleHistorySchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.saleHistory.update({
        where: { id: input.id },
        data: input,
      }),
    ),

  delete: procedure
    .input(z.string())
    .output(saleHistorySchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.saleHistory.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      }),
    ),
})
