// /app/api/routers/product.ts
import { z } from 'zod'

import { t } from '../trpc'

const ProductInput = z.object({
  name: z.string(),
  price: z.number(),
  categoryId: z.string(),
})

const ProductOutput = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  categoryId: z.string(),
})

const ProductTagInput = z.object({
  productId: z.string(),
  tagId: z.string(),
})

export const productRouter = t.router({
  getAll: t.procedure
    .query(
      async ({ ctx }) =>
        await ctx.prisma.product.findMany({
          where: { deletedAt: null },
          select: { id: true, name: true, price: true, categoryId: true },
        }),
    )
    .output(z.array(ProductOutput)),

  get: t.procedure
    .input(z.string())
    .query(
      async ({ ctx, input }) =>
        await ctx.prisma.product.findUnique({
          where: { id: input, deletedAt: null },
          select: { id: true, name: true, price: true, categoryId: true },
        }),
    )
    .output(ProductOutput.nullable()),

  create: t.procedure
    .input(ProductInput)
    .mutation(
      async ({ ctx, input }) =>
        await ctx.prisma.product.create({
          data: input,
          select: { id: true, name: true, price: true, categoryId: true },
        }),
    )
    .output(ProductOutput),

  update: t.procedure
    .input(ProductInput.extend({ id: z.string() }))
    .mutation(
      async ({ ctx, input }) =>
        await ctx.prisma.product.update({
          where: { id: input.id, deletedAt: null },
          data: input,
          select: { id: true, name: true, price: true, categoryId: true },
        }),
    )
    .output(ProductOutput),

  delete: t.procedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.product.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      })
      return { id: input }
    })
    .output(z.object({ id: z.string() })),

  // Endpoint to add a tag to a product
  addTagToProduct: t.procedure.input(ProductTagInput).mutation(async ({ ctx, input }) => {
    const { productId, tagId } = input
    // Assuming you have a join table named `ProductTag`
    return await ctx.prisma.productTag.create({
      data: {
        productId,
        tagId,
      },
      select: {
        product: {
          select: {
            id: true,
            name: true,
          },
        },
        tag: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
  }),

  // Endpoint to remove a tag from a product
  removeTagFromProduct: t.procedure.input(ProductTagInput).mutation(async ({ ctx, input }) => {
    const { productId, tagId } = input
    // Assuming you have a join table named `ProductTag`
    return await ctx.prisma.productTag.deleteMany({
      where: {
        productId,
        tagId,
      },
    })
  }),
})
