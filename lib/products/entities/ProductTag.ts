export const productTags = ['Sem gluten', 'Sem lactose', 'Sem leite', 'Vegetariano'] as const

type ProductTag = (typeof productTags)[number]
export default ProductTag
