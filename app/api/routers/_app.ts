import { router } from '../trpc'

import { allergenRouter } from './allergen'
import { categoryRouter } from './category'
import { clientRouter } from './client'
import { clientAddressRouter } from './clientAddress'
import { clientContactRouter } from './clientContact'
import { productRouter } from './product'
import { productionRouter } from './production'
import { saleRouter } from './sale'
import { saleDetailRouter } from './saleDetail'
import { saleHistoryRouter } from './saleHistory'
import { tagRouter } from './tag'

export const appRouter = router({
  allergen: allergenRouter,
  category: categoryRouter,
  client: clientRouter,
  clientAddress: clientAddressRouter,
  clientContact: clientContactRouter,
  product: productRouter,
  production: productionRouter,
  sale: saleRouter,
  saleDetail: saleDetailRouter,
  saleHistory: saleHistoryRouter,
  tag: tagRouter,
})

export type AppRouter = typeof appRouter
