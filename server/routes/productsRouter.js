import { Router } from "express";
import { ProductController } from "../controllers/productController.js"

export const productsRouter = (model) => {
  const controller = new ProductController(model);
  const product = Router();

  product.get('/', controller.getAll);
  product.get('/:code', controller.getOne);
  product.delete('/:code', controller.delete);
  product.post('/', controller.create);
  product.put('/:code', controller.update);

  return product;
}