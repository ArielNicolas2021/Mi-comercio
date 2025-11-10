import { useEffect, useState } from "react";
import { getTickets } from "../hooks/getTickets.jsx";
import { Info } from "lucide-react";
import { NavLink } from "react-router-dom";

export const TicketsTable = () => {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const renderTickets = async () => {
      const fetchedTickets = await getTickets(); // Obtenemos todas las facturas
      setTickets(fetchedTickets.data);
    }
    renderTickets()
  }, [])

  return (
    <table className="w-105 sm:w-full">
      <thead className="border-b border-gray-200 text-sm">
        <tr>
          <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Comprobante</th>
          <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Total</th>
          <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Detalles</th>
        </tr>
      </thead>
      <tbody className="group text-sm">
        {
          tickets.map((item, index) => {
            return (
              <tr className="border-b border-gray-200 last:border-0 even:bg-gray-100" key={index}>
                <td className="p-3 text-gray-600">{item._id}</td>
                <td className="p-3 text-gray-600">{item.total}</td>
                <td className="p-3 text-gray-600"><NavLink to={'/facturas/' + item._id}><Info className="p-1 bg-gray-300 border border-gray-500 rounded-md" /></NavLink></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>

  )
}
