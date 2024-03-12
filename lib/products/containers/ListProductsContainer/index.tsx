import ListProducts from "@/products/components/organisms/ListProducts";
import ListProductsCategories from "@/products/components/organisms/ListProductsCategories";
import { productSchema } from "@/products/entities/Product";

import importedProducts from "@/../data/produtos.json"
const products = importedProducts.map((product) => productSchema.cast(product));

function ListProductsContainer() {
  return (
    <>
      <ListProductsCategories products={products} />
      <ListProducts products={products} />
    </>
  );
};

export default ListProductsContainer;
