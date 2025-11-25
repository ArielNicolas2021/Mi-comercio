import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "../pages/home/Page.jsx";
import { Products } from "../pages/products/Page.jsx";
import { Tickets } from "../pages/tickets/Page.jsx";
import { NewProduct } from "../pages/products/NewProduct.jsx";
import { ViewProduct } from "../pages/products/ViewProduct.jsx";
import { NewTicket } from "../pages/tickets/NewTicket.jsx";
import { ViewTicket } from "../pages/tickets/ViewTicket.jsx";
import { NewCreditNote } from "../pages/tickets/NewCreditNote.jsx";
import { Login } from "../pages/login/Page.jsx";
import { Register } from "../pages/register/Page.jsx";

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/nuevo-producto" element={<NewProduct />} />
        <Route path="/productos/:id" element={<ViewProduct />} />
        <Route path="/facturas" element={<Tickets />} />
        <Route path="/facturas/nueva-factura" element={<NewTicket />} />
        <Route path="/facturas/nuevo-credito" element={<NewCreditNote />} />
        <Route path="/facturas/:id" element={<ViewTicket />} />
      </Routes>
    </BrowserRouter>
  )
}
