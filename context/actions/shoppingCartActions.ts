import type { ProductoType } from '../../components/ProductoCard'
import { ADD_TO_CART } from '../constants'

export const AddProductoToCart = (producto: ProductoType) => {
  return { type: ADD_TO_CART, producto }
}
