import Image from 'next/image'
import Link from 'next/link'

import formatCurrency from '@/core/helpers/format/currency'
import slugify from '@/core/utils/slugify'
import Product from '@/products/entities/Product'

export default function ListProductItem({ id, category, image, price, tags, name }: Readonly<Product>) {
  return (
    <Link
      href={`/produtos/${slugify(category)}/${id}`}
      className={`group flex w-full flex-col justify-center gap-2 rounded-md border
      border-black/5 bg-white p-4 transition hover:bg-black/5 hover:shadow-sm`}
    >
      {image && (
        <div className="h-full">
          <Image
            alt={name}
            src={image}
            width={228}
            height={128}
            className="aspect-[114/64] w-full rounded-md object-cover"
            priority
          />
        </div>
      )}
      <div className="flex w-full flex-col items-start">
        <h3 className="text-lg font-light tracking-wide text-primary-300">{name}</h3>
        <p className="text-xs text-primary">{tags.map(tag => tag).join(' | ')}</p>
        <p className="mt-auto text-2xl font-normal tracking-wide text-secondary-200">{formatCurrency(price)}</p>
      </div>
    </Link>
  )
}
