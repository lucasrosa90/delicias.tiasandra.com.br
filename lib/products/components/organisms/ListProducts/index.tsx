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
          <div className="grid gap-2 w-full md:grid-cols-2 xl:grid-cols-3 p-2">
            {products.map((product) => <ListProductItem key={product.id} {...product} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
