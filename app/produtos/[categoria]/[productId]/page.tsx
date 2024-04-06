import { Metadata } from "next";
import { notFound } from "next/navigation";

import slugify from "@/core/utils/slugify";
import ViewProduct from "@/products/components/organisms/ViewProduct";
import getProduct from "@/products/services/getProduct";

export async function generateMetadata({ params }: Readonly<{ params: { productId: string }}>): Promise<Metadata> {
  const { name, description } = await getProduct(params.productId)
  return {
    title: name,
    description: description,
  };
}

export default async function ViewProductPage({ params: { productId, categoria } }: Readonly<{ params: { productId: string; categoria: string }}>) {
  const product = await getProduct(productId);

  if (slugify(product.category) !== categoria) {
    return notFound();
  }

  return <ViewProduct {...product} />;
}
