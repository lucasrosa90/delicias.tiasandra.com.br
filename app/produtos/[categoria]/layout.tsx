import ListProductsCategories from "@/products/components/organisms/ListProductsCategories";
import listCategories from "@/products/services/listCategories";

type Props = {
  children: React.ReactNode;
  params: { categoria: string }
};

export default function LayoutListarProdutos({ children, params: { categoria } }: Readonly<Props>) {
  return (
    <>
      <ListProductsCategories categories={listCategories()} selected={categoria} />
      {children}
    </>
  );
}
