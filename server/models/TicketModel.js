import { model, Schema } from "mongoose";
import { connect } from "../helpers/connect.js";
import { ProductModel } from "./ProductModel.js";

connect();

const ticketSchema = new Schema(
  {
    user_id: String,
    ticketType: String,
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
  static async creditNote(ticket) {
    !TicketModel.success && Error;
    const newCreditNote = { ...ticket.data };
    const saveTicket = new Ticket(newCreditNote);

    try {
      await saveTicket.save();
      for (let i of newCreditNote.items) {
        const productId = i.product_code;
        const product = await ProductModel.getOne(productId);
        const newStock = {
          stock: product[0].stock + i.quantity
        }
        await ProductModel.update(productId, { data: newStock, success: true });
      }
      return newCreditNote;
    }
    catch (e) {
      console.log(e);
    }
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