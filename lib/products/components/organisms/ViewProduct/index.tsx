import PageTitle from "@/core/components/atoms/PageTitle";
import formatCurrency from "@/core/helpers/format/currency";
import Product from "@/products/entities/Product";
import Image from "next/image";

export default function ViewProduct({ name, image, description, price, tags, ingredients, allergens }: Readonly<Product>) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <Image alt={name} src={`/${image}`} width={228} height={128} className="rounded-md w-full aspect-[114/64] object-cover" priority />
        <div className="flex flex-col w-full">
          <PageTitle>{name}</PageTitle>
          <p className="text-primary">{description}</p>
          <p className="text-primary text-sm">{tags.map(tag => tag).join(" | ")}</p>
          <p className="text-primary text-2xl font-semibold mt-2">{formatCurrency(price)}</p>
          {/* <button className="border border-black mt-auto">Add to cart</button> */}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Ingredientes</h2>
        <p>{ingredients}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Alérgicos</h2>
        <p>{allergens}</p>
      </div>
    </div>
  );
}
