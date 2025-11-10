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
        message: "Factura no encontrada."
      });
  };
  creditNote = async (req, res) => {
    const ticket = validateTicket(req.body);

    ticket.error && res.status(404).json({
      status: 404,
      message: "Validación incorrecta."
    });
    const newCreditNote = await this.model.creditNote(ticket);
    res.json({
      status: 200,
      message: "Nota de crédito agregada.",
      data: newCreditNote
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
      message: "Factura agregada.",
      data: newTicket
    });
  };
};