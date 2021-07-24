import { updateCantidadProducto } from '../context/actions/shoppingCartActions'
import useShoppingCartContext from '../hooks/useShoppingCartContext'
import MinusIcon from './MinusIcon'
import PlusIcon from './PlusIcon'

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
          <MinusIcon />
        </button>
      )}
      <span className="m-4">{cantidad}</span>
      <button
        type="button"
        onClick={() => handleCantidad(cantidad + 1)}
        className="text-blue-700"
      >
        <PlusIcon />
      </button>
    </>
  )
}

export default Cantidad
