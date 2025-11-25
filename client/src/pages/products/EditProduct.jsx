import { useState } from "react"
import { InputBlock } from "../../components/InputBlock"
import { putProduct } from "../../hooks/putProduct"
import { useNavigate } from "react-router-dom"

export const EditProduct = ({ product, setEditMode }) => {
  const [productError, setProductError] = useState(false)
  const [costError, setCostError] = useState(false)
  const [priceError, setPriceError] = useState(false)
  const [stockError, setStockError] = useState(false)
  const userLogged = JSON.parse(localStorage.getItem('userAuth')).username;
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Verificamos los inputs
    event.target[0].value == "" ? setProductError(true) : setProductError(false)
    event.target[1].value == "" ? setCostError(true) : setCostError(false)
    event.target[2].value == "" ? setPriceError(true) : setPriceError(false)
    event.target[3].value == "" ? setStockError(true) : setStockError(false)
    // Cancelamos el envío si alguno de los inputs está vacío
    if (event.target[0].value == "" || event.target[1].value == "" || event.target[2].value == "" || event.target[3].value == "") { return }
    const newProduct = {
      user_id: userLogged,
      product: event.target[0].value,
      cost: Number(event.target[1].value),
      price: Number(event.target[2].value),
      stock: Number(event.target[3].value)
    }
    const put = await putProduct(product._id, newProduct) // Enviamos el producto editado
    navigate('/productos')
  }

  return (
    <form className="col-span-2" onSubmit={handleSubmit}>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-4'>
        <InputBlock id="product" label="Producto" placeholder="Ingrese el producto" error={productError} value={product.product} />
        <InputBlock id="cost" label="Costo" placeholder="Ingrese el costo" type="number" error={costError} value={product.cost} />
        <InputBlock id="price" label="Precio" placeholder="Ingrese el precio" type='number' error={priceError} value={product.price} />
        <InputBlock id="stock" label="Stock" placeholder="Ingrese el stock" type='number' error={stockError} value={product.stock} />
      </div>
      <button type="button" className='text-cyan-500 py-2 px-4 w-full sm:w-fit cursor-pointer hover:text-cyan-600 duration-300' onClick={() => setEditMode(false)}>Cancelar</button>
      <button type="submit" className='bg-cyan-500 text-white py-2 px-4 rounded-sm w-full sm:w-fit cursor-pointer hover:bg-cyan-600 duration-300'>Agregar producto</button>
    </form>
  )
}
