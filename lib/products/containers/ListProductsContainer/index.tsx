import ListProducts from "@/products/components/organisms/ListProducts";
import { productSchema } from "@/products/entities/Product";

import importedProducts from "@/../data/produtos.json"
const products = importedProducts.map((product) => productSchema.cast(product));

function ListProductsContainer() {
  return (
    <ListProducts products={products} />
  );
};

export default ListProductsContainer;
