import Cantidad from '../../components/Cantidad'
import TrashIcon from '../../components/TrashIcon'
import {
  clearCarrito,
  removeProductoFromCarrito,
} from '../../context/actions/shoppingCartActions'
import useShoppingCartContext from '../../hooks/useShoppingCartContext'
import { localStorageRemoveCarrito } from '../../utils/localStorage'

const Carrito = () => {
  const {
    state: { carrito },
    dispatch,
  } = useShoppingCartContext()

  if (carrito.length === 0) {
    return (
      <div className="grid justify-items-center">
        <h1 className="p-8 m-20 text-gray-600 rounded-3xl font-bold text-center bg-blue-200 w-6/12">
          No has agregado ningun producto al carrito...
        </h1>
      </div>
    )
  }
  const totales: number[] = []

  const clearCart = () => {
    dispatch(clearCarrito())
    localStorageRemoveCarrito()
  }

  const removeProducto = (id: number) => {
    if (carrito.length === 1) {
      dispatch(removeProductoFromCarrito(id))
      localStorageRemoveCarrito()
    } else {
      dispatch(removeProductoFromCarrito(id))
    }
  }

  return (
    <div className="p-2">
      <table className="rounded-t-lg m-5 w-5/6 mx-auto">
        <thead className="text-white bg-blue-400">
          <tr className="text-left border-b-2 border-blue-500">
            <th className="px-4 py-3">Producto</th>
            <th className="px-4 py-3">Cantidad</th>
            <th className="px-4 py-3">Precio</th>
            <th className="px-4 py-3">Total</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-blue-200 text-blue-900">
          {carrito.map((producto) => {
            const { name, id, price, cantidad } = producto
            if (!cantidad) {
              return ''
            }
            const total = (cantidad * +price).toFixed(2)
            totales.push(+total)
            return (
              <tr
                key={id}
                className="text-xs md:text-base border-b border-blue-400"
              >
                <td className="p-3 w-5/12">
                  <div className="inline-block max-h-12 overflow-auto">
                    {name}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Cantidad productoId={id} cantidad={+cantidad} />
                </td>
                <td className="py-3">$ {price}</td>
                <td className="px-4 py-3">$ {total}</td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => removeProducto(id)}
                    className="bg-red-500 p-1 rounded font-bold text-white"
                  >
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            )
          })}
          <tr className="text-left border-b border-blue-500">
            <th className="px-4 py-3">SubTotal</th>
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3 text-xs md:text-base">
              $ {totales.reduce((acc, curr) => acc + curr).toFixed(2)}
            </th>
            <th className="px-4 py-3"></th>
          </tr>
          <tr className="text-left border-b border-blue-500">
            <th className="px-4 py-3">IVA</th>
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3 text-xs md:text-base">
              $ {(totales.reduce((acc, curr) => acc + curr) * 0.16).toFixed(2)}
            </th>
            <th className="px-4 py-3"></th>
          </tr>
          <tr className="text-xs md:text-base text-left border-b-2 border-blue-500">
            <th className="px-4 py-3">Total</th>
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3 text-xs md:text-base">
              ${' '}
              {(
                totales.reduce((acc, curr) => acc + curr) +
                totales.reduce((acc, curr) => acc + curr) * 0.16
              ).toFixed(2)}
            </th>
            <th className="px-4 py-3"></th>
          </tr>
        </tbody>
      </table>
      <div className="grid justify-items-center">
        <button
          className="bg-red-600 font-bold text-white hover:bg-red-700 rounded p-2"
          onClick={clearCart}
        >
          Vacíar carrito
        </button>
      </div>
    </div>
  )
}

export default Carrito
