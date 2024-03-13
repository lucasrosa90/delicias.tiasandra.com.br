import ViewProductContainer from "@/products/containers/ViewProductContainer";
export { generateMetadata } from "@/products/containers/ViewProductContainer";

export default function ViewProduct({ params }: Readonly<{ params: { productId: string }}>) {
  return <ViewProductContainer id={params.productId} />
}
