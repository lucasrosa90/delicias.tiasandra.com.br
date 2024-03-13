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

function ListProductsCategories({ categories }: Readonly<Props>) {
  return (
    <div className="sticky top-0 bg-filled z-20 w-screen">
      <div className="flex w-full overflow-x-auto h-8 items-center">
      {categories.map((category) => (
        <a onClick={() => scrollToHash(category)} key={category} className="sticky top-0 z-10 px-2 font-semibold w-full text-center whitespace-nowrap text-sm">
          {category}
        </a>
      ))}
      </div>
    </div>
  )
}

export default ListProductsCategories;
