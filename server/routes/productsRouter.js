import { Router } from "express";
import { ProductController } from "../controllers/productController.js"

export const productsRouter = (model) => {
  const controller = new ProductController(model);
  const product = Router();

  product.get('/', controller.getAll);
  product.get('/:id', controller.getOne);
  product.delete('/:id', controller.delete);
  product.post('/', controller.create);
  product.put('/:id', controller.update);

  return product;
}