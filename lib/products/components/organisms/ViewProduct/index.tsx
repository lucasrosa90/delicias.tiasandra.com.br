import Image from 'next/image'

import formatCurrency from '@/core/helpers/format/currency'
import Product from '@/products/entities/Product'

export default function ViewProduct({
  name,
  image,
  description,
  price,
  tags,
  ingredients,
  allergens,
}: Readonly<Product>) {
  return (
    <div className="mt-4 flex flex-col items-center gap-4 p-2">
      <div className="flex w-full max-w-screen-md flex-col gap-4 md:flex-row">
        {image && (
          <Image
            alt={name}
            src={image}
            width={228}
            height={128}
            className="aspect-[114/64] w-full rounded-md object-cover"
            priority
          />
        )}
        <div className="flex w-full flex-col">
          <h1 className="mb-2 text-2xl font-light tracking-tight text-primary-300">{name}</h1>
          <p className="text-base font-light text-primary">{tags.map(tag => tag).join(' | ')}</p>
          <p className="mb-4 mt-2 text-3xl font-normal text-secondary-200">{formatCurrency(price)}</p>
          {/* <button className="border border-black mt-auto">Add to cart</button> */}

          {description && (
            <div className="mt-2">
              <h2 className="text-lg font-normal underline">Descrição</h2>
              <p className="font-light tracking-wider text-primary-200">{description}</p>
            </div>
          )}

          {allergens && (
            <div className="mt-2">
              <h2 className="text-lg font-normal underline">Alérgicos</h2>
              <p className="font-light tracking-wider text-primary-200">{allergens}</p>
            </div>
          )}

          {ingredients && (
            <div className="mt-2">
              <h2 className="text-lg font-normal underline">Ingredientes</h2>
              <p className="font-light tracking-wider text-primary-200">{ingredients}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
