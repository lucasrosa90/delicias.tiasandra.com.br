import { Metadata } from "next";

import ViewProduct from "@/products/components/organisms/ViewProduct";
import getProduct from "@/products/services/getProduct";

export async function generateMetadata({ params }: Readonly<{ params: { productId: string }}>): Promise<Metadata> {
  const { name, description } = await getProduct(params.productId)
  return {
    title: name,
    description: description,
  };
}

export default async function ViewProductContainer({ id }: Readonly<{ id: string }>) {
  const product = await getProduct(id);
  return <ViewProduct {...product} />;
}
