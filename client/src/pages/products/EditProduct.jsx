import { useState } from "react"
import { InputBlock } from "../../components/InputBlock"
import { putProduct } from "../../hooks/putProduct"
import { useNavigate } from "react-router-dom"

export const EditProduct = ({ product, setEditMode }) => {
  const [codeError, setCodeError] = useState(false)
  const [productError, setProductError] = useState(false)
  const [costError, setCostError] = useState(false)
  const [priceError, setPriceError] = useState(false)
  const [stockError, setStockError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    event.target[0].value == "" ? setCodeError(true) : setCodeError(false)
    event.target[1].value == "" ? setProductError(true) : setProductError(false)
    event.target[2].value == "" ? setCostError(true) : setCostError(false)
    event.target[3].value == "" ? setPriceError(true) : setPriceError(false)
    event.target[4].value == "" ? setStockError(true) : setStockError(false)
    if (event.target[0].value == "" || event.target[1].value == "" || event.target[2].value == "" || event.target[3].value == "" || event.target[4].value == "") { return }
    const newProduct = {
      user_id: 1,
      code: event.target[0].value,
      product: event.target[1].value,
      cost: Number(event.target[2].value),
      price: Number(event.target[3].value),
      stock: Number(event.target[4].value)
    }
    const put = await putProduct(product.code, newProduct)
    navigate('/productos')
  }

  return (
    <form className="col-span-2" onSubmit={handleSubmit}>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-4'>
        <InputBlock id="code" label="Código" placeholder="Ingrese el código del producto" error={codeError} value={product.code} />
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
