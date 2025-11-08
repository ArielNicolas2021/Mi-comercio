import { model, Schema } from "mongoose";
import { connect } from "../helpers/connect.js";
import { ProductModel } from "./ProductModel.js";

connect();

const ticketSchema = new Schema(
  {
    user_id: Number,
    date: String,
    items: Array,
    total: Number
  },
  {
    versionKey: false
  }
);
const Ticket = model('Ticket', ticketSchema);

export class TicketModel {
  static async getAll() {
    try {
      return Ticket.find();
    }
    catch (e) {
      console.log(e);
    };
  };
  static async getOne(id) {
    try {
      return await Ticket.findById(id);
    }
    catch (e) {
      console.log(e);
    };
  };
  static async delete(id) {
    try {
      return Ticket.deleteOne({ _id: id });
    }
    catch (e) {
      console.log(e);
    };
  };
  static async create(ticket) {
    !TicketModel.success && Error;
    const newTicket = { ...ticket.data };
    const saveTicket = new Ticket(newTicket);

    try {
      await saveTicket.save();
      for (let i of newTicket.items) {
        const productId = i.product_code;
        const product = await ProductModel.getOne(productId);
        const newStock = {
          stock: product[0].stock - i.quantity
        }
        await ProductModel.update(productId, { data: newStock, success: true });
      }
      return newTicket;
    }
    catch (e) {
      console.log(e);
    }
  }
};