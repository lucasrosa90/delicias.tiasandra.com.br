import { Metadata } from "next";
import { notFound } from "next/navigation";

import slugify from "@/core/utils/slugify";
import ViewProduct from "@/products/components/organisms/ViewProduct";
import getProduct from "@/products/services/getProduct";
import listProducts from "@/products/services/listProducts";

export function generateMetadata({ params }: Readonly<{ params: { productId: string }}>): Metadata {
  const { name, description } = getProduct(params.productId)
  return {
    title: name,
    description: description,
  };
}

export function generateStaticParams() {
  return listProducts().flatMap(({ products, category }) => products.map(({ id }) => ({
    productId: id,
    categoria: slugify(category)
  })));
}

export default async function ViewProductPage({ params: { productId, categoria } }: Readonly<{ params: { productId: string; categoria: string }}>) {
  const product = await getProduct(productId);

  if (slugify(product.category) !== categoria) {
    return notFound();
  }

  return <ViewProduct {...product} />;
}
