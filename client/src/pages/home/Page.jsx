import { useEffect } from "react"
import { Navbar } from "../../components/Navbar"
import { DateNow } from "../../utils/DateNow"

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
    </>
  )
}
