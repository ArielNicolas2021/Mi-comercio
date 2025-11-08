import express from "express";
import cors from "cors";
import { productsRouter } from "./routes/productsRouter.js"
import { ProductModel } from "./models/ProductModel.js";
import { ticketsRouter } from "./routes/ticketsRouter.js";
import { TicketModel } from "./models/TicketModel.js"

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 1234;

app.use('/api/products', productsRouter(ProductModel));
app.use('/api/tickets', ticketsRouter(TicketModel))

app.listen(PORT, () => {
  console.log("Servidor a la espera...");
});