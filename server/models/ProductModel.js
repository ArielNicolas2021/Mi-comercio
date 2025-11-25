import { model, Schema } from "mongoose";
import { connect } from "../helpers/connect.js";

connect();

const productSchema = new Schema(
  {
    user_id: String,
    product: String,
    cost: Number,
    price: Number,
    stock: Number
  },
  {
    versionKey: false
  }
)
const Product = model('Product', productSchema);

export class ProductModel {
  static async getAll() {
    try {
      return Product.find();
    }
    catch (e) {
      console.log(e)
    };
  };
  static async getOne(id) {
    try {
      return await Product.find({ _id: id })
    }
    catch (e) {
      console.log(e);
    };
  };
  static async delete(id) {
    try {
      return Product.deleteOne({ _id: id });
    }
    catch (e) {
      console.log(e);
    };
  };
  static async create(product) {
    !ProductModel.success && Error;
    const newProduct = { ...product.data };
    const saveProduct = new Product(newProduct);

    try {
      await saveProduct.save();
      return newProduct;
    }
    catch (e) {
      console.log(e);
    };
  };
  static async update(id, validation) {
    !validation.success && res.status(400).json('Validación incorrecta.');
    try {
      return await Product.findOneAndUpdate(
        { _id: id },
        { ...validation.data },
        { new: true }
      );
    }
    catch (e) {
      console.log(e)
    };
  };
};