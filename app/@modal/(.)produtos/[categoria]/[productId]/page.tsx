import { notFound } from 'next/navigation'

import Modal from '@/core/components/species/Modal'
import slugify from '@/core/utils/slugify'
import ViewProduct from '@/products/components/organisms/ViewProduct'
import getProduct from '@/products/services/getProduct'

export default async function ViewProductPage({
  params: { productId, categoria },
}: Readonly<{ params: { productId: string; categoria: string } }>) {
  const product = await getProduct(productId)

  if (slugify(product.category) !== categoria) {
    return notFound()
  }

  return (
    <Modal>
      <ViewProduct {...product} />
    </Modal>
  )
}
