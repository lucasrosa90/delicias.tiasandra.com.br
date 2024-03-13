import Product from "@/products/entities/Product";
import ProductCategory from "@/products/entities/ProductCategory";
import ListProductItem from "../../molecules/ListProductItem";

type Props = {
  productsByCategories: {
    category: ProductCategory;
    products: Product[];
  }[];
}

export default function ListProducts({ productsByCategories }: Readonly<Props>) {
  return (
    <div>
      {productsByCategories.map(({ category, products }) => (
        <div key={category} id={category} className="scroll-mt-10">
          <div className="sticky top-10 z-10 bg-primary-80 px-4 py-2 font-semibold text-primary-400">
            {category}
          </div>
          <div className="grid md:gap-2 w-full md:grid-cols-2 divide-y divide-black/15 md:divide-y-0">
            {products.map((product) => <ListProductItem key={product.id} {...product} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
