import importedProducts from "@/../data/produtos.json";
import Product, { productSchema } from "../entities/Product";
import { productCategories } from "../entities/ProductCategory";
import slugify from "@/core/utils/slugify";

const loadedProducts = importedProducts.map((product) => productSchema.cast(product));

function productsByCategories(products: Product[]) {
  return productCategories.map((category) => ({
    category,
    products: products.filter((product) => product.category === category)
  })).filter(({ products }) => products.length > 0);
}

export default function listProducts(category?: string) {
  if (category) {
    return productsByCategories(loadedProducts).filter(({ category: productCategory }) => slugify(productCategory) === category);
  }
  return productsByCategories(loadedProducts);
}
