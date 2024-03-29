import Modal from "@/core/components/species/Modal";
import ViewProductContainer from "@/products/containers/ViewProductContainer";
export { generateMetadata } from "@/products/containers/ViewProductContainer";

export default function ViewProduct({ params }: Readonly<{ params: { productId: string }}>) {
  return (
    <Modal>
      <ViewProductContainer id={params.productId} />
    </Modal>
  )
}
