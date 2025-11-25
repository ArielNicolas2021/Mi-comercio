import express from "express";
import { productsRouter } from "./routes/productsRouter.js"
import { ProductModel } from "./models/ProductModel.js";
import { ticketsRouter } from "./routes/ticketsRouter.js";
import { TicketModel } from "./models/TicketModel.js"
import cors from "cors";
import { CreateUsers } from "./routes/usersRouter.js";
import { UserModel } from "./models/userModel.js";
import { auth } from "./middleware/auth.js";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 1234;

app.use('/api/products', auth, productsRouter(ProductModel));
app.use('/api/tickets', auth, ticketsRouter(TicketModel));
app.use('/api/users', CreateUsers(UserModel))

app.listen(PORT, () => {
  console.log("Servidor a la espera...");
});