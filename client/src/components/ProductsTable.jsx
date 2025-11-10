import { useEffect, useState } from "react";
import { getProducts } from "../hooks/getProducts";
import { Info } from "lucide-react";
import { NavLink } from "react-router-dom";

export const ProductsTable = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const renderProducts = async () => {
      const fetchedProducts = await getProducts(); // Obtenemos todos los productos
      setProducts(fetchedProducts.data);
    }
    renderProducts()
  }, [])

  return (
    <table className="w-105 sm:w-full">
      <thead className="border-b border-gray-200 text-sm">
        <tr>
          <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Código</th>
          <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Producto</th>
          <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Costo</th>
          <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Precio</th>
          <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Stock</th>
          <th className="px-2.5 py-2 text-gray-950 text-start font-bold">Detalles</th>
        </tr>
      </thead>
      <tbody className="group text-sm">
        {
          products.map((item, index) => {
            return (
              <tr className="border-b border-gray-200 last:border-0 even:bg-gray-100" key={index}>
                <td className="p-3 text-gray-600">{item.code}</td>
                <td className="p-3 text-gray-600">{item.product}</td>
                <td className="p-3 text-gray-600">${item.cost}</td>
                <td className="p-3 text-gray-600">${item.price}</td>
                <td className="p-3 text-gray-600">{item.stock}</td>
                <td className="p-3 text-gray-600"><NavLink to={'/productos/' + item.code}><Info className="p-1 bg-gray-300 border border-gray-500 rounded-md" /></NavLink></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>

  )
}
