import slugify from '@/core/utils/slugify'
import ListProducts from '@/products/components/organisms/ListProducts'
import listCategories from '@/products/services/listCategories'
import listProducts from '@/products/services/listProducts'

export async function generateStaticParams() {
  return listCategories().map(categoria => ({ categoria: slugify(categoria) }))
}

export default function ListarProdutosPorCategoria({ params: { categoria } }: { params: { categoria: string } }) {
  return <ListProducts productsByCategories={listProducts(categoria)} />
}
