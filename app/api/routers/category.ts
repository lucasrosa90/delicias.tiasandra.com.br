import { z } from 'zod'

import { router, procedure } from '../trpc'

export const categoryRouter = router({
  get: procedure
    .input(z.string())
    .output(
      z.object({
        id: z.string(),
        name: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
        deletedAt: z.date().nullable(),
      }),
    )
    .query(({ ctx, input }) =>
      ctx.prisma.category.findUniqueOrThrow({
        where: { id: input, deletedAt: null },
      }),
    ),

  getAll: procedure
    .output(
      z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          createdAt: z.date(),
          updatedAt: z.date(),
          deletedAt: z.date().nullable(),
        }),
      ),
    )
    .query(({ ctx }) =>
      ctx.prisma.category.findMany({
        where: { deletedAt: null },
      }),
    ),

  create: procedure
    .input(
      z.object({
        name: z.string().min(1),
      }),
    )
    .output(
      z.object({
        id: z.string(),
        name: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
        deletedAt: z.date().nullable(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.prisma.category.create({
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
    .output(
      z.object({
        id: z.string(),
        name: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
        deletedAt: z.date().nullable(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.prisma.category.update({
        where: { id: input.id },
        data: input,
      }),
    ),

  delete: procedure
    .input(z.string())
    .output(
      z.object({
        id: z.string(),
        name: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
        deletedAt: z.date().nullable(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.prisma.category.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      }),
    ),
})
