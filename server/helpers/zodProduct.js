import zod from 'zod';

const productSchema = zod.object({
  user_id: zod.string(),
  product: zod.string(),
  cost: zod.number(),
  price: zod.number(),
  stock: zod.number()
});

export const validateProduct = (product) => {
  return productSchema.safeParse(product);
};
export const partialValidate = (product) => {
  return productSchema.partial().safeParse(product);
};