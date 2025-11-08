import { Search } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { ProductsTable } from '../../components/ProductsTable'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { DateNow } from '../../utils/DateNow'

export const Products = () => {
  useEffect(() => {
    document.title = "Productos | Mi Comercio"
  }, [])

  return (
    <>
      <Navbar currentNav="productos" />
      <main className='sm:m-4 sm:ml-[200px]'>
        <div className='p-4'>
          <h1 className="text-2xl font-bold text-gray-950">Productos</h1>
          <p className="text-gray-600">{`${DateNow.day} / ${DateNow.month} / ${DateNow.year} - ${DateNow.hour}:${DateNow.minutes}`}</p>
        </div>
        <div className='bg-white border border-gray-300 p-4 flex flex-col items-center gap-4 m-4 sm:ml-4'>
          <div className="flex flex-col items-center gap-1 w-full md:flex-row">
            <form className='flex items-center w-full md:w-fit' onSubmit={(event) => event.preventDefault()}>
              <input type="text" name="search" id="search" placeholder='Buscar producto' className='border border-gray-300 bg-gray-50 p-2 rounded-l-md w-full md:w-50' />
              <button type="submit" className='bg-cyan-500 w-[42px] h-[42px] flex justify-center items-center rounded-r-md cursor-pointer hover:bg-cyan-600 duration-300'><Search className='text-white' size={16} /></button>
            </form>
            <div className="flex flex-col gap-1 w-full md:flex-row sm:justify-end">
              <NavLink to="/productos/nuevo-producto" className='flex justify-center items-center py-2 px-4 bg-cyan-500 text-white font-semibold rounded-sm hover:bg-cyan-600 duration-300 cursor-pointer'>Nuevo producto</NavLink>
            </div>
          </div>
          <div className='w-full overflow-auto'>
            <ProductsTable />
          </div>
        </div>
      </main>
    </>
  )
}
