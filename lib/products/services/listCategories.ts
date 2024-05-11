import listProducts from './listProducts'

export default function listCategories() {
  return listProducts()
    .map(({ category }) => category)
    .filter((value, index, self) => self.indexOf(value) === index)
}
