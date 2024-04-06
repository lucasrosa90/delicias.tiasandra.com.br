import formatCurrency from "@/core/helpers/format/currency";
import Product from "@/products/entities/Product";
import Image from "next/image";

export default function ViewProduct({ name, image, description, price, tags, ingredients, allergens }: Readonly<Product>) {
  return (
    <div className="flex flex-col gap-4 p-2 items-center mt-4">
      <div className="flex flex-col md:flex-row gap-4 max-w-screen-md w-full">
        {image && (
          <Image alt={name} src={image} width={228} height={128} className="rounded-md w-full aspect-[114/64] object-cover" priority />
        )}
        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-light text-primary-300 tracking-tight mb-2">{name}</h1>
          <p className="text-primary text-base font-light">{tags.map(tag => tag).join(" | ")}</p>
          <p className="text-secondary-200 text-3xl font-normal mt-2 mb-4">{formatCurrency(price)}</p>
          {/* <button className="border border-black mt-auto">Add to cart</button> */}

          {description && (
            <div className="mt-2">
              <h2 className="text-lg font-normal underline">Descrição</h2>
              <p className="font-light tracking-wider text-primary-200">{description}</p>
            </div>
          )}

          {allergens && (
            <div className="mt-2">
              <h2 className="text-lg font-normal underline">Alérgicos</h2>
              <p className="font-light tracking-wider text-primary-200">{allergens}</p>
            </div>
          )}

          {ingredients && (
            <div className="mt-2">
              <h2 className="text-lg font-normal underline">Ingredientes</h2>
              <p className="font-light tracking-wider text-primary-200">{ingredients}</p>
            </div>
          )}
        </div>
      </div>


    </div>
  );
}
