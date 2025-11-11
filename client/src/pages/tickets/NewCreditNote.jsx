import { Navbar } from '../../components/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getTicket } from '../../hooks/getTicket.jsx'
import { DateNow } from '../../utils/DateNow.js'
import { postCredit } from '../../hooks/postCredit.jsx'

export const NewCreditNote = () => {
  const [tickets, setTickets] = useState("")
  const [searchInput, setSearchInput] = useState(undefined)
  const navigate = useNavigate()

  const handleSearch = async (event) => {
    event.preventDefault()
    setSearchInput(event.target[0].value)
    if (event.target[0].value == "") { return }
    const ticketID = event.target[0].value
    const fetchGetTicket = await getTicket(ticketID)
    setTickets(fetchGetTicket.data)
    console.log(fetchGetTicket.data)
    setSearchInput("")
  }

  const handleSubmit = async () => {
    const ticket = {
      user_id: 1,
      ticketType: "Nota de crédito",
      date: `${DateNow.day}/${DateNow.month}/${DateNow.year}`,
      items: tickets.items,
      total: tickets.total
    }
    const fetchPostCredit = await postCredit(ticket)
    navigate('/facturas')
  }

  useEffect(() => {
    document.title = "Nueva nota de crédito | Mi comercio"
  }, [])

  return (
    <>
      <Navbar currentNav="facturas" />
      <div className="p-4 flex flex-col gap-4 sm:ml-[200px]">
        <div>
          <NavLink to="/facturas" className="text-cyan-500">{"<- Volver"}</NavLink>
        </div>
        <div className="bg-white border border-gray-300 p-4 rounded-md flex flex-col gap-4">
          <h1 className="text-gray-950 text-xl font-semibold">Nueva nota de crédito</h1>
          <form className="flex items-end justify-center" onSubmit={handleSearch}>
            <div>
              <input type="text" name="search" id="search" className="border border-gray-300 bg-gray-50 p-2 rounded-l-md md:w-50" placeholder='Ingrese el código de la factura' value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
            </div>
            <button type="submit" className="bg-cyan-500 text-white py-2 px-4 rounded-r-md cursor-pointer duration-300 h-[42px] hover:bg-cyan-600 sm:w-fit"><Search className='text-white' size={16} /></button>
          </form>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 my-4'>
            <div>
              <h2 className="text-gray-950 font-bold">Fecha</h2>
              <p className="text-gray-600">{tickets.date}</p>
            </div>
            <div>
              <h2 className="text-gray-950 font-bold">Tipo de factura</h2>
              <p className="text-gray-600">{tickets.ticketType}</p>
            </div>
            <div>
              <h2 className="text-gray-950 font-bold">Total</h2>
              <p className="text-gray-600">${tickets.total}</p>
            </div>
          </div>
          <div className="w-full overflow-auto">
            <table className="w-105 sm:w-full col-span-3">
              <thead className="border-b border-gray-200 text-sm">
                <tr>
                  <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Código</th>
                  <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Producto</th>
                  <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Precio</th>
                  <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Cantidad</th>
                </tr>
              </thead>
              <tbody className="group text-sm">
                {
                  tickets != [] &&
                  tickets.items.map((tick, index) =>
                    <tr className="border-b border-gray-200 last:border-0 even:bg-gray-100" key={index}>
                      <td className="p-3 text-gray-600">{tick.product_code}</td>
                      <td className="p-3 text-gray-600">{tick.product_name}</td>
                      <td className="p-3 text-gray-600">${tick.price}</td>
                      <td className="p-3 text-gray-600">{tick.quantity}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
        <button type="button" className='bg-cyan-500 text-white py-2 px-4 rounded-sm w-full sm:w-fit cursor-pointer hover:bg-cyan-600 duration-300' onClick={handleSubmit}>Enviar factura</button>
      </div>
    </>
  )
}
