import Product from "@/products/entities/Product";
import ListProductItem from "../../molecules/ListProductItem";

type Props = {
  products: Product[];
}

function ListProducts({ products }: Props) {
  return (
    <div className="grid gap-2 w-full border border-black">
      {products.map((product) => <ListProductItem key={product.id} {...product} />)}
    </div>
  );
}

export default ListProducts;
