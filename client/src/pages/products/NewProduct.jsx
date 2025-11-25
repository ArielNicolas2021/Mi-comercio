import { Navbar } from '../../components/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import { postProduct } from '../../hooks/postProduct';
import { useEffect, useState } from 'react';
import { InputBlock } from '../../components/InputBlock';

export const NewProduct = () => {
  const [productError, setProductError] = useState(false)
  const [costError, setCostError] = useState(false)
  const [priceError, setPriceError] = useState(false)
  const [stockError, setStockError] = useState(false)
  const userLogged = JSON.parse(localStorage.getItem('userAuth')).username;
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Verificamos los inputs
    event.target[0].value == "" ? setProductError(true) : setProductError(false)
    event.target[1].value == "" ? setCostError(true) : setCostError(false)
    event.target[2].value == "" ? setPriceError(true) : setPriceError(false)
    event.target[3].value == "" ? setStockError(true) : setStockError(false)
    // Cancelamos el envío si alguno de los inputs está vacío
    if (event.target[0].value == "" || event.target[1].value == "" || event.target[2].value == "" || event.target[3].value == "") {return}
    const product = {
      user_id: userLogged,
      product: event.target[0].value,
      cost: Number(event.target[1].value),
      price: Number(event.target[2].value),
      stock: Number(event.target[3].value)
    }
    const post = await postProduct(product) // Envíamos el producto
    navigate('/productos')
  }

  useEffect(() => {
    document.title = "Nuevo producto | Mi Comercio"
  }, [])

  return (
    <>
      <Navbar currentNav="productos" />
      <div className='p-4 flex flex-col gap-4 sm:ml-[200px]'>
        <div>
          <NavLink to="/productos" className="text-cyan-500">{"<- Volver"}</NavLink>
        </div>
        <div className='bg-white border border-gray-300 p-4 rounded-md'>
          <h1 className='text-gray-950 text-xl font-semibold'>Nuevo Producto</h1>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-4'>
              <InputBlock id="product" label="Producto" placeholder="Ingrese el producto" error={productError} />
              <InputBlock id="cost" label="Costo" placeholder="Ingrese el costo" type="number" error={costError} />
              <InputBlock id="price" label="Precio" placeholder="Ingrese el precio" type='number' error={priceError} />
              <InputBlock id="stock" label="Stock" placeholder="Ingrese el stock" type='number' error={stockError} />
            </div>
            <button type="submit" className='bg-cyan-500 text-white py-2 px-4 rounded-sm w-full sm:w-fit cursor-pointer hover:bg-cyan-600 duration-300'>Agregar producto</button>
          </form>
        </div>
      </div>
    </>
  )
}
