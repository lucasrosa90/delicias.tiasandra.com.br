import importedProducts from "@/../data/produtos.json"
import Product, { productSchema } from "../entities/Product";
const loadedProducts = importedProducts.map((product) => productSchema.cast(product));

export default function getProduct(id: string): Product | never {
  const foundProduct = loadedProducts.find((product) => product.id === id);

  if (!foundProduct) {
    throw new Error(`Product with id ${id} not found`);
  }

  return foundProduct;
}
