'use client';

import ProductCategory from "@/products/entities/ProductCategory";

type Props = {
  categories: ProductCategory[];
}

function scrollToHash(hash: string) {
  const element = document.getElementById(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export default function ListProductsCategories({ categories }: Readonly<Props>) {
  return (
    <div className="sticky top-0 bg-filled z-20 w-full">
      <div className="flex overflow-x-auto h-10 items-center border-b border-t border-black/15">
        {categories.map((category) => (
          <a onClick={() => scrollToHash(category)} key={category} className="cursor-pointer sticky top-0 z-10 px-2 font-semibold w-full text-center whitespace-nowrap text-sm">
            {category}
          </a>
        ))}
      </div>
    </div>
  )
}
