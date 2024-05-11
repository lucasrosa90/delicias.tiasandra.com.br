// /app/api/routers/clientAddress.ts
import { t } from '../trpc'
import { z } from 'zod'

const AddressInput = z.object({
  clientId: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
})

export const clientAddressRouter = t.router({
  addAddress: t.procedure.input(AddressInput).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.address.create({
      data: input,
    })
  }),

  updateAddress: t.procedure.input(AddressInput.extend({ id: z.string() })).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.address.update({
      where: { id: input.id },
      data: input,
    })
  }),

  deleteAddress: t.procedure.input(z.string()).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.address.delete({
      where: { id: input },
    })
  }),
})
