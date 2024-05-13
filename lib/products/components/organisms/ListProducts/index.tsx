'use client'

import Product from '@/products/entities/Product'
import ProductCategory from '@/products/entities/ProductCategory'
import { trpc } from '@/utils/trpc'

import ListProductItem from '../../molecules/ListProductItem'

type Props = {
  productsByCategories: {
    category: ProductCategory
    products: Product[]
  }[]
}

export default function ListProducts({ productsByCategories }: Readonly<Props>) {
  const [data] = trpc.category.getAll.useSuspenseQuery()
  console.log(data)
  return (
    <div>
      {productsByCategories.map(({ category, products }) => (
        <div
          key={category}
          id={category}
          className="scroll-mt-10">
          <div className="grid w-full gap-2 p-2 md:grid-cols-2 xl:grid-cols-3">
            {products.map(product => (
              <ListProductItem
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
