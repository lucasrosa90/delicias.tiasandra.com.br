import Link from "next/link";

import slugify from "@/core/utils/slugify";
import listCategories from "@/products/services/listCategories";

import SVGbolos from '../../lib/products/components/organisms/ListProductsCategories/bolos.svg';
import SVGcarne from '../../lib/products/components/organisms/ListProductsCategories/carne.svg';
import SVGfrango from '../../lib/products/components/organisms/ListProductsCategories/frango.svg';
import SVGporcoes from '../../lib/products/components/organisms/ListProductsCategories/porcoes.svg';
import SVGsopas from '../../lib/products/components/organisms/ListProductsCategories/sopas.svg';

const mapCategoryToSVG: Record<string, any> = {
  'bolos': SVGbolos,
  'carne': SVGcarne,
  'frango': SVGfrango,
  'porcoes': SVGporcoes,
  'sopas': SVGsopas,
}

export default function Home() {
  return (
    <div className="flex justify-center items-start h-full w-full pt-4">
      <div className="grid grid-cols-2 place-items-center border-black/15 gap-2 md:gap-4">
        {listCategories().map((category) => {
            const slug = slugify(category);
            const Icon = mapCategoryToSVG[slug];
            return (
            <Link
              href={`/produtos/${slug}`}
              key={category}
              className={[
                'flex flex-col items-center gap-2 max-w-32 w-full h-full justify-center',
                'hover:drop-shadow-sm transition hover:text-primary-30',
                'text-black hover:scale-105 border rounded-lg py-5 px-20 md:px-24 border-black/20 bg-black/5',
                'shadow-md'
              ].join(' ')}
            >
              <div className="w-24 h-24"><Icon /></div>
              <span className="whitespace-nowrap text-sm md:text-base font-normal tracking-wider">{category}</span>
            </Link>
          )})}
      </div>
    </div>
  );
}
