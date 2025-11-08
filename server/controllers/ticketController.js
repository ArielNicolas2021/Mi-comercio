import { validateTicket } from "../helpers/zodTicket.js";

export class TicketController {
  constructor (model) {
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
    const ticket = await this.model.getOne(id);

    ticket ?
      res.json({
        status: 200,
        data: ticket
      }) :
      res.status(404).json({
        status: 404,
        message: "Ticket no encontrado."
      });
  };
  delete = async (req, res) => {
    const id = req.params.id;
    const returnTicket = await this.model.delete(id);

    returnTicket ?
      res.json({
        status: 200,
        message: "Ticket eliminado.",
        data: returnTicket
      }) :
      res.status(404).json({
        status: 404,
        message: "Ticket no encontrado"
      });
  };
  create = async (req, res) => {
    const ticket = validateTicket(req.body);

    ticket.error && res.status(404).json({
      status: 404,
      message: "Validación incorrecta."
    });
    const newTicket = await this.model.create(ticket);
    res.json({
      status: 200,
      message: "Ticket agregado.",
      data: newTicket
    });
  };
};