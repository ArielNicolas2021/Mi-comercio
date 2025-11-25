import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { Navbar } from "../../components/Navbar.jsx"
import { getProduct } from "../../hooks/getProduct.jsx"
import { Delete, Edit } from "lucide-react"
import { EditProduct } from "./EditProduct.jsx"
import { deleteProduct } from "../../hooks/deleteProduct.jsx"

export const ViewProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [editMode, setEditMode] = useState(false)
  const navigate = useNavigate()

  const handleDelete = async () => {
    const del = await deleteProduct(id); // Eliminamos el producto
    navigate('/productos')
  }

  useEffect(() => {
    const renderProducts = async () => {
      const fetchedProducts = await getProduct(id); // Obtenemos el producto según el código
      setProduct(fetchedProducts.data[0])
      document.title = fetchedProducts.data[0].product + " | Mi Comercio"
    }
    renderProducts()
  }, [])

  return (
    <>
      <Navbar currentNav="productos" />
      <div className="p-4 flex flex-col gap-4 sm:ml-[200px]">
        <div>
          <NavLink to="/productos" className="text-cyan-500">{"<- Volver"}</NavLink>
        </div>
        <div className='bg-white border border-gray-300 p-4 rounded-md'>
          <h1 className='text-gray-950 text-xl font-semibold'>Detalles del producto</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-4'>
            {
              !editMode ?
                <>
                  <div>
                    <h2 className="text-gray-950 font-bold">Producto</h2>
                    <p className="text-gray-600">{product.product}</p>
                  </div>
                  <div>
                    <h2 className="text-gray-950 font-bold">Costo</h2>
                    <p className="text-gray-600">${product.cost}</p>
                  </div>
                  <div>
                    <h2 className="text-gray-950 font-bold">Precio</h2>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                  <div>
                    <h2 className="text-gray-950 font-bold">Stock</h2>
                    <p className="text-gray-600">{product.stock}</p>
                  </div>
                </> :
                <EditProduct product={product} setEditMode={setEditMode} />
            }
          </div>
          {
            !editMode ?
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-1 text-cyan-500 cursor-pointer w-fit" onClick={() => setEditMode(true)}>Editar <Edit size={14} /></p>
                <p className="flex items-center gap-1 text-red-500 cursor-pointer w-fit" onClick={handleDelete}>Eliminar <Delete size={14} /></p>
              </div> : ""
          }
        </div>
      </div>
    </>
  )
}
