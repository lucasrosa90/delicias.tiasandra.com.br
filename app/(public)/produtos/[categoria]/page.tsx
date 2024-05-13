import { dehydrate } from '@tanstack/react-query'

import ListProducts from '@/products/components/organisms/ListProducts'
import listProducts from '@/products/services/listProducts'
import { createSSRHelper } from '@/server/helpers'
import Hydrate from '@/utils/hydrate-client'

// export async function generateStaticParams() {
//   return listCategories().map(categoria => ({ categoria: slugify(categoria) }))
// }

export default async function ListarProdutosPorCategoria({ params: { categoria } }: { params: { categoria: string } }) {
  const helpers = createSSRHelper()
  await helpers.category.getAll.prefetch()

  return (
    <Hydrate state={dehydrate(helpers.queryClient)}>
      <ListProducts productsByCategories={listProducts(categoria)} />
    </Hydrate>
  )
}
