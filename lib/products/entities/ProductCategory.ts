export const productCategories = [
  'Frango',
  'Carne bovina',
  'Sopas e Cremes',
  'Bolos Saudáveis',
  'Porções',
] as const;

type ProductCategory = typeof productCategories[number];
export default ProductCategory;
