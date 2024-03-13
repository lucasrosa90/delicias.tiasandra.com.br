import ListProducts from "@/products/components/organisms/ListProducts";
import ListProductsCategories from "@/products/components/organisms/ListProductsCategories";
import Product, { productSchema } from "@/products/entities/Product";

import importedProducts from "@/../data/produtos.json"
import { productCategories } from "@/products/entities/ProductCategory";
const loadedProducts = importedProducts.map((product) => productSchema.cast(product));

function productsByCategories(products: Product[]) {
  return productCategories.map((category) => ({
    category,
    products: products.filter((product) => product.category === category)
  })).filter(({ products }) => products.length > 0);
}

const productsByCategoriesData = productsByCategories(loadedProducts);
const categories = productsByCategoriesData.map(({ category }) => category).filter((value, index, self) => self.indexOf(value) === index);

function ListProductsContainer() {
  return (
    <div className="relative">
      <ListProductsCategories categories={categories} />
      <ListProducts productsByCategories={productsByCategoriesData} />
    </div>
  );
};

export default ListProductsContainer;
