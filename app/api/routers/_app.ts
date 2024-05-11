// /app/api/routers/_app.ts
import { router } from '../trpc'

import { allergensRouter } from './allergens'
import { categoryRouter } from './category'
import { clientRouter } from './client'
import { clientAddressRouter } from './clientAddress'
import { clientContactRouter } from './clientContact'
import { productRouter } from './product'
import { productionRouter } from './production'
import { saleRouter } from './sale'

export const appRouter = router({
  allergens: allergensRouter,
  category: categoryRouter,
  client: clientRouter,
  clientAddress: clientAddressRouter,
  clientContact: clientContactRouter,
  product: productRouter,
  production: productionRouter,
  sale: saleRouter,
})

export type AppRouter = typeof appRouter
