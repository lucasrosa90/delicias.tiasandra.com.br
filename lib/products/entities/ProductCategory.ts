export const productCategories = [
  'Frango',
  'Carne bovina',
  'Sopas e Cremes',
  'Porções',
  'Bolos Saudáveis',
] as const;

type ProductCategory = typeof productCategories[number];
export default ProductCategory;
