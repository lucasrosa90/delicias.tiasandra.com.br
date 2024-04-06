import ListProducts from "@/products/components/organisms/ListProducts";
import listProducts from "@/products/services/listProducts";

export default function ListarProdutosPorCategoria({ params: { categoria }}: { params: { categoria: string; }}) {
  return (
    <ListProducts productsByCategories={listProducts(categoria)} />
  );
}
