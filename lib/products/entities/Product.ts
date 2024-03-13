import yup from "@/core/utils/yup";
import { productTags } from "./ProductTag";
import { productCategories } from "./ProductCategory";

export const productSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  image: yup.string().required(),
  category: yup.string().oneOf(productCategories).defined(),
  ingredients: yup.string().required(),
  allergens: yup.string().required(),
  tags: yup.array().of(yup.string().oneOf(productTags).defined()).required()
});

type Product = yup.InferType<typeof productSchema>;
export default Product;
