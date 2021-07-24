import type { ProductoType } from '../../components/ProductoCard'
import { localStorageGetCarrito } from '../../utils/localStorage'
import {
  ADD_TO_CART,
  CLEAR_CARRITO,
  GET_ALL_DATA,
  REMOVE_PRODUCTO_FROM_CART,
  UPDATE_CANTIDAD_PRODUCTO,
} from '../constants'

export const AddProductoToCart = (producto: ProductoType) => ({
  type: ADD_TO_CART,
  producto,
})

export const getProductosFromLocalStore = () => ({
  type: GET_ALL_DATA,
  data: localStorageGetCarrito(),
})

export const updateCantidadProducto = (id: number, cantidad: number) => ({
  type: UPDATE_CANTIDAD_PRODUCTO,
  id,
  cantidad,
})

export const removeProductoFromCarrito = (id: number) => ({
  type: REMOVE_PRODUCTO_FROM_CART,
  id,
})

export const clearCarrito = () => ({ type: CLEAR_CARRITO })
