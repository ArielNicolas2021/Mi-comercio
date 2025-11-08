import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { Navbar } from "../../components/Navbar.jsx"
import { getTicket } from "../../hooks/getTicket.jsx"


export const ViewTicket = () => {
  const { id } = useParams()
  const [ticket, setTicket] = useState([])

  useEffect(() => {
    document.title = "Detalle de factura | Mi Comercio"
    const renderTickets = async () => {
      const fetchedTickets = await getTicket(id);
      setTicket(fetchedTickets.data)
    }
    renderTickets()
  }, [])

  return (
    <>
      <Navbar currentNav="facturas" />
      <div className="p-4 flex flex-col gap-4 sm:ml-[200px]">
        <div>
          <NavLink to="/facturas" className="text-cyan-500">{"<- Volver"}</NavLink>
        </div>
        <div className='bg-white border border-gray-300 p-4 rounded-md'>
          <h1 className='text-gray-950 text-xl font-semibold'>Detalles de la factura</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-4'>
            <div>
              <h2 className="text-gray-950 font-bold">Fecha</h2>
              <p className="text-gray-600">{ticket.date}</p>
            </div>
            <div>
              <h2 className="text-gray-950 font-bold">Total</h2>
              <p className="text-gray-600">{ticket.total}</p>
            </div>
            <div className="col-span-2">
              <h2 className="text-gray-950 font-bold">Productos</h2>
              <div className="w-full overflow-auto">
                <table className="w-105 sm:w-full">
                  <thead className="border-b border-gray-200 text-sm">
                    <tr>
                      <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Producto</th>
                      <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Precio</th>
                      <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Cantidad</th>
                    </tr>
                  </thead>
                  <tbody className="group text-sm">
                    {
                      ticket.items != undefined && ticket.items.map((ticket, index) => {
                        return (
                          <tr className="border-b border-gray-200 last:border-0 even:bg-gray-100" key={index}>
                            <td className="p-3 text-gray-600">{ticket.product_name}</td>
                            <td className="p-3 text-gray-600">{ticket.price}</td>
                            <td className="p-3 text-gray-600">{ticket.quantity}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
