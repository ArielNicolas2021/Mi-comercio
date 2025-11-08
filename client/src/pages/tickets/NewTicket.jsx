import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar.jsx'
import { getProduct } from '../../hooks/getProduct.jsx';
import { Search } from 'lucide-react';
import { DateNow } from '../../utils/DateNow.js';
import { postTicket } from '../../hooks/postTicket.jsx';

export const NewTicket = () => {
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (event.target[0].value == "") { return }
    const productSearch = event.target[0].value
    const search = await getProduct(productSearch)
    if (search.data[0] == undefined) { return }
    const product = {
      product_code: search.data[0].code,
      product_name: search.data[0].product,
      price: search.data[0].price,
      quantity: 1,
    }
    setProducts(prevProd => [...prevProd, product])
    event.target[0].value = ""
  }

  const handleChange = (quan, code) => {
    setProducts(products.map(prod =>
      prod.product_code == code ? { ...prod, quantity: Number(quan) } : prod
    ))
  }

  const handleSetTicket = async () => {
    const ticket = {
      user_id: 1,
      date: `${DateNow.day}/${DateNow.month}/${DateNow.year}`,
      items: products,
      total: total
    }
    const post = await postTicket(ticket)
    console.log(post)
    setProducts([])
  }

  useEffect(() => {
    const renderTotal = () => {
      setTotal(0)
      products.map(prod => setTotal((prevTotal) => prevTotal + (prod.quantity * prod.price)))
    }
    renderTotal()
  }, [products])

  useEffect(() => {
    document.title = "Nuevo producto | Mi Comercio"
  }, [])

  return (
    <>
      <Navbar currentNav="facturas" />
      <div className='p-4 flex flex-col gap-4 sm:ml-[200px]'>
        <div>
          <NavLink to="/facturas" className="text-cyan-500">{"<- Volver"}</NavLink>
        </div>
        <div className='bg-white border border-gray-300 p-4 rounded-md flex flex-col gap-4'>
          <h1 className='text-gray-950 text-xl font-semibold'>Nueva factura</h1>
          <form className='flex items-end justify-center' onSubmit={handleSubmit}>
            <div>
              <input type="text" name="search" id="search" placeholder='Ingrese el código del producto' className='border border-gray-300 bg-gray-50 p-2 rounded-l-md md:w-50' />
            </div>
            <button type="submit" className=' h-[42px] bg-cyan-500 text-white py-2 px-4 rounded-r-md sm:w-fit cursor-pointer hover:bg-cyan-600 duration-300'><Search className='text-white' size={16} /></button>
          </form>
          <div className='w-full overflow-auto'>
            <table className="w-105 sm:w-full">
              <thead className="border-b border-gray-200 text-sm">
                <tr>
                  <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Código</th>
                  <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Producto</th>
                  <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Precio</th>
                  <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Cantidad</th>
                  <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Total</th>
                </tr>
              </thead>
              <tbody className="group text-sm">
                {
                  products.length > 0 && products.map((item, index) => {
                    return (
                      <tr className="border-b border-gray-200 last:border-0 even:bg-gray-100" key={index}>
                        <td className="p-3 text-gray-600">{item.product_code}</td>
                        <td className="p-3 text-gray-600">{item.product_name}</td>
                        <td className="p-3 text-gray-600">${item.price}</td>
                        <td className="p-3 text-gray-600">
                          <input className='w-15' type="number" name={item.product_code + "quantity"} id={item.product_code + "quantity"} placeholder='Cantidad' min={1} value={item.quantity} onChange={(event) => handleChange(event.target.value, item.product_code)} />
                        </td>
                        <td className="p-3 text-gray-600">${item.quantity * item.price}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
            <div className='flex justify-between my-4'>
              <h2 className='text-xl font-semibold text-gray-950'>Total de la factura</h2>
              <span className='text-gray-600'>${total}</span>
            </div>
            <button type="button" className='bg-cyan-500 text-white py-2 px-4 rounded-sm w-full sm:w-fit cursor-pointer hover:bg-cyan-600 duration-300' onClick={handleSetTicket}>Enviar factura</button>
        </div>
      </div>
    </>
  )
}
