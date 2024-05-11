'use client'

import Link from 'next/link'

import slugify from '@/core/utils/slugify'
import ProductCategory from '@/products/entities/ProductCategory'

import SVGbolos from './bolos.svg'
import SVGcarne from './carne.svg'
import SVGfrango from './frango.svg'
import SVGporcoes from './porcoes.svg'
import SVGsopas from './sopas.svg'

type Props = {
  categories: ProductCategory[]
  selected: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapCategoryToSVG: Record<string, any> = {
  bolos: SVGbolos,
  carne: SVGcarne,
  frango: SVGfrango,
  porcoes: SVGporcoes,
  sopas: SVGsopas,
}

export default function ListProductsCategories({ categories, selected }: Readonly<Props>) {
  return (
    <div className="sticky top-0 z-20 w-full bg-filled">
      <div className="flex h-20 items-center justify-around overflow-x-auto overflow-y-hidden border-black/15 md:h-24">
        {categories.map(category => {
          const slug = slugify(category)
          const Icon = mapCategoryToSVG[slug]
          return (
            <Link
              href={`/produtos/${slug}`}
              key={category}
              className={[
                'flex flex-col px-2 items-center gap-2 max-w-20 w-full h-full justify-center',
                'hover:drop-shadow-sm transition hover:text-primary-30',
                selected === slug ? 'text-primary' : 'text-black hover:scale-105',
              ].join(' ')}
            >
              <div className="size-9">
                <Icon />
              </div>
              <span className="whitespace-nowrap text-sm font-normal tracking-wider md:text-base">{category}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
