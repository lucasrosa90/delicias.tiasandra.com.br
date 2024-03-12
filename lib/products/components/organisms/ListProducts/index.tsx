import Product from "@/products/entities/Product";
import { productCategories } from "@/products/entities/ProductCategory";
import ListProductItem from "../../molecules/ListProductItem";

type Props = {
  products: Product[];
}

function productsByCategories(products: Product[]) {
  return productCategories.map((category) => ({
    category,
    products: products.filter((product) => product.category === category)
  }));
}

function ListProducts({ products }: Readonly<Props>) {
  const productsByCategory = productsByCategories(products);
  return (
    <div>
      {productsByCategory.map(({ category, products }) => (
        <div key={category}>
          <div className="sticky top-0 z-10 bg-primary/25 px-4 py-2 font-semibold">
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

export default ListProducts;
