import formatCurrency from "@/core/helpers/format/currency";
import Product from "@/products/entities/Product";
import Image from "next/image";
import Link from "next/link";

export default function ListProductItem({ id, category, description, image, price, tags, name }: Readonly<Product>) {
  return (
    <Link href={`/${id}`} className="flex justify-between p-4 gap-2">
      <div className="w-full flex flex-col min-h-24">
        <h3 className="text-lg font-semibold text-primary-300">{name}</h3>
        <p className="text-primary text-xs">
          {tags.map(tag => tag).join(" | ")}
        </p>
        <p className="text-primary text-lg mt-auto font-semibold">
          {formatCurrency(price)}
        </p>
      </div>
      <div className="h-full">
        <Image alt={name} src={`/${image}`} width={228} height={128} className="rounded-md h-full aspect-[114/64] object-cover" priority />
      </div>
    </Link>
  )
}
