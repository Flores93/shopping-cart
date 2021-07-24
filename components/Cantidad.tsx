import { updateCantidadProducto } from '../context/actions/shoppingCartActions'
import useShoppingCartContext from '../hooks/useShoppingCartContext'

type CantidadProps = { cantidad: number; productoId: number }

const Cantidad = ({ productoId, cantidad }: CantidadProps) => {
  const { dispatch } = useShoppingCartContext()

  const handleCantidad = (newCantidad: number) => {
    dispatch(updateCantidadProducto(productoId, newCantidad))
  }
  return (
    <>
      {cantidad === 1 ? (
        ''
      ) : (
        <button
          type="button"
          onClick={() => handleCantidad(cantidad - 1)}
          className="text-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      )}
      <span className="m-4">{cantidad}</span>
      <button
        type="button"
        onClick={() => handleCantidad(cantidad + 1)}
        className="text-blue-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </>
  )
}

export default Cantidad
