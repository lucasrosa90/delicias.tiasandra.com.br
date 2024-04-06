'use client';

import slugify from "@/core/utils/slugify";
import ProductCategory from "@/products/entities/ProductCategory";
import Link from "next/link";

import SVGbolos from './bolos.svg'
import SVGcarne from './carne.svg'
import SVGfrango from './frango.svg'
import SVGporcoes from './porcoes.svg'
import SVGsopas from './sopas.svg'

type Props = {
  categories: ProductCategory[];
  selected: string;
}

const mapCategoryToSVG: Record<string, any> = {
  'bolos': SVGbolos,
  'carne': SVGcarne,
  'frango': SVGfrango,
  'porcoes': SVGporcoes,
  'sopas': SVGsopas,
}

export default function ListProductsCategories({ categories, selected }: Readonly<Props>) {
  return (
    <div className="sticky top-0 bg-filled z-20 w-full">
      <div className="flex overflow-x-auto items-center border-black/15 h-20 md:h-24 justify-around overflow-y-hidden">
        {categories.map((category) => {
          const slug = slugify(category);
          const Icon = mapCategoryToSVG[slug];
          return (
          <Link
            href={`/produtos/${slug}`}
            key={category}
            className={[
              'flex flex-col px-2 items-center gap-2 max-w-20 w-full h-full justify-center',
              'hover:drop-shadow-sm transition hover:text-primary-30',
              selected === slug ? 'text-primary' : 'text-black hover:scale-105'
            ].join(' ')}
          >
            <div className="w-9 h-9"><Icon /></div>
            <span className="whitespace-nowrap text-sm md:text-base font-normal tracking-wider">{category}</span>
          </Link>
        )})}
      </div>
    </div>
  )
}
