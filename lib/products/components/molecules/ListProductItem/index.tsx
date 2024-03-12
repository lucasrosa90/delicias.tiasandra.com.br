import Product from "@/products/entities/Product";
import Image from "next/image";

function ListProductItem({ id, category, description, image, price, tags, name }: Product) {
  return (
    <div className="border border-black flex justify-between p-4">
      <div className="w-full">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <div className="aspect-[114/64] min-w-[114px]">
        <Image alt={name} src={`/${image}`} width={228} height={128} className="rounded-md" />
      </div>
    </div>
  )
}

export default ListProductItem;
