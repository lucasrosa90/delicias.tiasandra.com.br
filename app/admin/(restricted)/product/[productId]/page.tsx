import Link from 'next/link'

import { ChevronLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { createSSRHelper } from '@/server/helpers'

import AllergensCard from './allergens.card'
import EditProduct from './edit.card'
import ImageCard from './image.card'
import ProductionCard from './production.card'
import TagsCard from './tags.card'

export default async function AdminViewProduct({ params: { productId } }: { params: { productId: string } }) {
  const product = await createSSRHelper().product.get.fetch(productId)
  return (
    <>
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-2 border-b bg-background px-2">
        <Link href="/admin/products">
          <Button
            variant="ghost"
            size="icon"
            className="size-7">
            <ChevronLeft className="size-4" />
            <span className="sr-only">Voltar</span>
          </Button>
        </Link>

        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Detalhes do produto
        </h1>
      </header>

      <main className="grid gap-4 p-4 lg:grid-cols-[1fr_450px] xl:grid-cols-3">
        <div
          className={`grid auto-rows-max items-start gap-4 md:grid-cols-[1fr_280px]
        lg:grid-cols-1 xl:col-span-2 xl:grid-cols-[1fr_400px]`}>
          <EditProduct productId={productId} />

          <div className="grid gap-4">
            <TagsCard
              productId={productId}
              defaultValues={product.tags}
            />

            <ImageCard product={product} />
          </div>
        </div>

        <div className="grid auto-rows-max grid-cols-1 gap-4 md:grid-cols-[1fr_280px] lg:grid-cols-1">
          <ProductionCard productId={productId} />

          <AllergensCard
            productId={productId}
            defaultValues={product.allergens}
          />
        </div>
      </main>
    </>
  )
}
