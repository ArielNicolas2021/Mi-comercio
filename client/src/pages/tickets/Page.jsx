import { useEffect } from "react"
import { Navbar } from "../../components/Navbar"
import { DateNow } from "../../utils/DateNow"
import { Search } from "lucide-react"
import { NavLink } from "react-router-dom"
import { TicketsTable } from "../../components/TicketsTable.jsx"

export const Tickets = () => {
  useEffect(() => {
    document.title = "Facturas | Mi Comercio"
  }, [])

  return (
    <>
      <Navbar currentNav="facturas" />
      <main className="sm-m-4 sm:ml-[200px]">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-950">Facturas</h1>
          <p className="text-gray-600">{`${DateNow.day} / ${DateNow.month} / ${DateNow.year} - ${DateNow.hour}:${DateNow.minutes}`}</p>
        </div>
        <div className='bg-white border border-gray-300 p-4 flex flex-col items-center gap-4 m-4 sm:ml-4'>
          <div className="flex flex-col items-center gap-1 w-full md:flex-row">
            <form className='flex items-center w-full md:w-fit' onSubmit={(event) => event.preventDefault()}>
              <input type="text" name="search" id="search" placeholder='Buscar factura' className='border border-gray-300 bg-gray-50 p-2 rounded-l-md w-full md:w-50' />
              <button type="submit" className='bg-cyan-500 w-[42px] h-[42px] flex justify-center items-center rounded-r-md cursor-pointer hover:bg-cyan-600 duration-300'><Search className='text-white' size={16} /></button>
            </form>
            <div className="flex flex-col gap-1 w-full md:flex-row sm:justify-end">
              <NavLink to="/facturas/nueva-factura" className='flex justify-center items-center py-2 px-4 bg-cyan-500 text-white font-semibold rounded-sm hover:bg-cyan-600 duration-300 cursor-pointer'>Nueva factura</NavLink>
              <NavLink to="/facturas/nota-debito" className='flex justify-center items-center py-2 px-4 bg-gray-500 text-white font-semibold rounded-sm hover:bg-gray-600 duration-300 cursor-pointer'>Nota de débito</NavLink>
            </div>
          </div>
          <div className='w-full overflow-auto'>
            <TicketsTable />
          </div>
        </div>
      </main>
    </>
  )
}
