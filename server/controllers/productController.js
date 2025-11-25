import { validateProduct, partialValidate } from "../helpers/zodProduct.js";

export class ProductController {
  constructor(model) {
    this.model = model;
  };

  getAll = async (req, res) => {
    res.json({
      status: 200,
      data: await this.model.getAll()
    });
  };
  getOne = async (req, res) => {
    const id = req.params.id;
    const product = await this.model.getOne(id);

    product ?
      res.json({
        status: 200,
        data: product
      }) :
      res.status(404).json({
        status: 404,
        message: "Producto no encontrado."
      });
  };
  delete = async (req, res) => {
    const id = req.params.id;
    const returnProduct = await this.model.delete(id);

    returnProduct ?
      res.json({
        status: 200,
        message: "Producto eliminado.",
        data: returnProduct
    }) :
    res.status(404).json({
      status: 404,
      message: "Producto no encontrado."
    });
  };
  create = async (req, res) => {
    const product = validateProduct(req.body);

    product.error && res.status(400).json({
      status: 400,
      message: "Validación incorrecta."
    });
    const newProduct = await this.model.create(product);
    res.json({
      status: 200,
      message: "Producto agregado.",
      data: newProduct
    });
  };
  update = async (req, res) => {
    const id = req.params.id;
    const validProduct = partialValidate(req.body);
    const newProduct = await this.model.update(id, validProduct);
    res.json({
      status: 200,
      message: "Producto actualizado.",
      data: newProduct
    })
  };
};