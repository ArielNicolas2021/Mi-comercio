import { useEffect } from "react"
import { Navbar } from "../../components/Navbar.jsx"
import { DateNow } from "../../utils/DateNow.js"
import { TotalTickets } from "../../components/TotalTickets.jsx"
import { TotalAmount } from "../../components/TotalAmount.jsx"

export const Home = () => {
  useEffect(() => {
    document.title = "Inicio | Mi Comercio"
  }, [])

  return (
    <>
      <Navbar currentNav="inicio" />
      <div className="p-4 sm:ml-[200px]">
        <h1 className="text-2xl font-bold text-gray-950">Bienvenido Usuario123</h1>
        <p className="text-gray-600">{`${DateNow.day} / ${DateNow.month} / ${DateNow.year} - ${DateNow.hour}:${DateNow.minutes}`}</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:ml-[200px]'>
        <div className="bg-white border border-gray-300 p-4 m-4">
          <h2 className="text-xl font-semibold">Cantidad de ventas por mes</h2>
          <TotalTickets />
        </div>
        <div className="bg-white border border-gray-300 p-4 m-4">
          <h2 className="text-xl font-semibold">Total de ventas por mes</h2>
          <TotalAmount />
        </div>
      </div>
    </>
  )
}
