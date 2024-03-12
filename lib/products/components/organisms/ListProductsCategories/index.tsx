import Product from "@/products/entities/Product";

type Props = {
  products: Product[];
}

// List all products categories. Should not have repeated categories.
function listProductsCategories(products: Product[]) {
  return products.map(product => product.category).filter((value, index, self) => self.indexOf(value) === index);
}

function ListProductsCategories({ products }: Readonly<Props>) {
  const categories = listProductsCategories(products);
  return (
    <div className="flex w-full overflow-x-auto">
      {categories.map((category) => (
        <div key={category} className="sticky top-0 z-10 bg-primary/10 px-4 py-2 font-semibold w-full text-center whitespace-nowrap">
          {category}
        </div>
      ))}
    </div>
  )
}

export default ListProductsCategories;
