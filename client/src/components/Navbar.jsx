import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import { Menu, House, BookUser, Tickets, Bell, SquareUser, LogOut } from "lucide-react";

export const Navbar = ({ currentNav }) => {
  const [menuActived, setMenuActived] = useState(false);

  useEffect(() => {
    window.innerWidth <= 450 ? setMenuActived(false) : setMenuActived(true)
  }, [])

  return (
    <>
      <div className="bg-cyan-500 p-4 sm:hidden">
        <Menu className="text-white cursor-pointer" onClick={() => menuActived ? setMenuActived(false) : setMenuActived(true)} />
      </div>
      <div className={menuActived ? "bg-[#00000080] fixed top-0 left-0 w-full h-dvh sm:bg-transparent sm:w-fit" : "w-0 h-0 overflow-hidden"} onClick={(event) => event.target.className.includes("fixed") ? setMenuActived(false) : ""}>
        <ul className={menuActived ? "bg-cyan-500 h-full w-50 py-8 grid grid-template-rows-2 transition-[width] duration-300 overflow-hidden sm:duration-0" : "w-0"}>
          <div>
            <li className={currentNav == "inicio" ? "bg-cyan-700" : "hover:bg-cyan-600 duration-300"}><NavLink to="/" className="flex items-center gap-1 text-white px-4 py-2"><House size={16} /> Inicio</NavLink></li>
            <li className={currentNav == "productos" ? "bg-cyan-700" : "hover:bg-cyan-600 duration-300"}><NavLink to="/productos" className="flex items-center gap-1 text-white px-4 py-2"><BookUser size={16} /> Productos</NavLink></li>
            <li className={currentNav == "facturas" ? "bg-cyan-700" : "hover:bg-cyan-600 duration-300"}><NavLink to="/facturas" className="flex items-center gap-1 text-white px-4 py-2"><Tickets size={16} /> Facturas</NavLink></li>
            <li className={currentNav == "notificaciones" ? "bg-cyan-700" : "hover:bg-cyan-600 duration-300"}><NavLink to="/notificaciones" className="flex items-center gap-1 text-white px-4 py-2"><Bell size={16} /> Notificaciones</NavLink></li>
          </div>
          <div className="flex flex-col justify-end">
            <li className={currentNav == "perfil" ? "bg-cyan-700" :"hover:bg-cyan-600 duration-300"}><NavLink to="/perfil" className="flex items-center gap-1 text-white px-4 py-2"><SquareUser size={16} /> Perfil</NavLink></li>
            <li className={currentNav == "login" ? "bg-cyan-700" :"hover:bg-cyan-600 duration-300"}><NavLink to="/login" className="flex items-center gap-1 text-white px-4 py-2"><LogOut size={16} /> Cerrar sesión</NavLink></li>
          </div>
        </ul>
      </div>
    </>
  )
}
