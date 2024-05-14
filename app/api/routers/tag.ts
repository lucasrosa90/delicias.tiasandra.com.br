import { z } from 'zod'

import { router, procedure } from '../trpc'

export const tagSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
})

export const tagRouter = router({
  get: procedure
    .input(z.string())
    .output(tagSchema)
    .query(({ ctx, input }) =>
      ctx.prisma.tag.findUniqueOrThrow({
        where: { id: input, deletedAt: null },
      }),
    ),

  getAll: procedure.output(z.array(tagSchema)).query(({ ctx }) =>
    ctx.prisma.tag.findMany({
      where: { deletedAt: null },
    }),
  ),

  create: procedure
    .input(
      z.object({
        name: z.string().min(1),
      }),
    )
    .output(tagSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.tag.create({
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
    .output(tagSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.tag.update({
        where: { id: input.id },
        data: input,
      }),
    ),

  delete: procedure
    .input(z.string())
    .output(tagSchema)
    .mutation(({ ctx, input }) =>
      ctx.prisma.tag.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      }),
    ),
})
