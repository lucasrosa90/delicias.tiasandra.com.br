// /app/api/routers/clientContact.ts
import { z } from 'zod'

import { t } from '../trpc'

const ContactInput = z.object({
  clientId: z.string(),
  contactType: z.string(),
  contactValue: z.string(),
})

export const clientContactRouter = t.router({
  addContact: t.procedure.input(ContactInput).mutation(
    async ({ ctx, input }) =>
      await ctx.prisma.clientContact.create({
        data: input,
      }),
  ),

  updateContact: t.procedure.input(ContactInput.extend({ id: z.string() })).mutation(
    async ({ ctx, input }) =>
      await ctx.prisma.clientContact.update({
        where: { id: input.id },
        data: input,
      }),
  ),

  deleteContact: t.procedure.input(z.string()).mutation(
    async ({ ctx, input }) =>
      await ctx.prisma.clientContact.delete({
        where: { id: input },
      }),
  ),
})
