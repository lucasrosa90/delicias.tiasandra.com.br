import formatCurrency from "@/core/helpers/format/currency";
import slugify from "@/core/utils/slugify";
import Product from "@/products/entities/Product";
import Image from "next/image";
import Link from "next/link";

export default function ListProductItem({ id, category, description, image, price, tags, name }: Readonly<Product>) {
  return (
    <Link
      href={`/produtos/${slugify(category)}/${id}`}
      className="flex flex-col justify-center p-4 gap-2 hover:bg-black/5 rounded-md border border-black/5 w-full group hover:shadow-sm bg-white transition"
    >
      {image && (
        <div className="h-full">
          <Image alt={name} src={image} width={228} height={128} className="rounded-md w-full aspect-[114/64] object-cover" priority />
        </div>
      )}
      <div className="w-full flex flex-col items-start">
        <h3 className="text-lg font-light tracking-wide text-primary-300">{name}</h3>
        <p className="text-primary text-xs">
          {tags.map(tag => tag).join(" | ")}
        </p>
        <p className="text-secondary-200 text-2xl mt-auto font-normal tracking-wide">
          {formatCurrency(price)}
        </p>
      </div>
    </Link>
  )
}
