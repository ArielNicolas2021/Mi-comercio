import zod from 'zod';

const ticketSchema = zod.object({
  user_id: zod.number(),
  date: zod.string(),
  ticketType: zod.string(),
  items: zod.array(zod.object({
    product_code: zod.string(),
    product_name: zod.string(),
    price: zod.number(),
    quantity: zod.number()
  })),
  total: zod.number()
});

export const validateTicket = (ticket) => {
  return ticketSchema.safeParse(ticket);
};
export const partialValidate = (ticket) => {
  return ticketSchema.partial().safeParse(ticket);
};