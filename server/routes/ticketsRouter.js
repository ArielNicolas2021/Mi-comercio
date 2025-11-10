import { Router } from "express";
import { TicketController } from "../controllers/ticketController.js";

export const ticketsRouter = (model) => {
  const controller = new TicketController(model);
  const ticket = Router();

  ticket.get('/', controller.getAll);
  ticket.get('/:id', controller.getOne);
  ticket.post('/', controller.create);
  ticket.post('/creditNote', controller.creditNote);

  return ticket;
}