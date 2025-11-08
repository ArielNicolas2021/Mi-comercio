import { Router } from "express";
import { TicketController } from "../controllers/ticketController.js";

export const ticketsRouter = (model) => {
  const controller = new TicketController(model);
  const ticket = Router();

  ticket.get('/', controller.getAll);
  ticket.get('/:id', controller.getOne);
  ticket.delete('/:id', controller.delete);
  ticket.post('/', controller.create);

  return ticket;
}