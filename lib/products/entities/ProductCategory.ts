export const productCategories = [
  'Frango',
  'Carne',
  'Sopas',
  'Porções',
  'Bolos',
] as const;

type ProductCategory = typeof productCategories[number];
export default ProductCategory;
