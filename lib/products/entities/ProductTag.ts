export const productTags = [
  'Sem gluten',
  'Sem lactose',
  'Vegetariano'
] as const;

type ProductTag = typeof productTags[number];
export default ProductTag;
