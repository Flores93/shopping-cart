import React, { useCallback, createContext, useReducer, useEffect } from 'react'

import type { ProductoType } from '../components/ProductoCard'
import { localStorageGetCarrito } from '../utils/localStorage'
import { getProductosFromLocalStore } from './actions/shoppingCartActions'
import {
  ADD_TO_CART,
  CLEAR_CARRITO,
  GET_ALL_DATA,
  REMOVE_PRODUCTO_FROM_CART,
  UPDATE_CANTIDAD_PRODUCTO,
} from './constants'

const initState = {
  carrito: [],
}

export const shoppingCartContext = createContext(localStorageGetCarrito() || {})

const RootContext = ({ children }: { children: React.ReactElement }) => {
  const rootReducer = useCallback((state = {}, action) => {
    const exists = state.carrito.some(
      (producto: ProductoType) => action.producto?.id === producto.id
    )

    const addExistingProduct = state.carrito.map((producto: ProductoType) =>
      producto.id === action.producto?.id
        ? {
            ...producto,
            cantidad: producto.cantidad && producto.cantidad + 1,
          }
        : producto
    )

    switch (action.type) {
      case GET_ALL_DATA:
        return {
          ...state,
          ...action.data,
        }
      case ADD_TO_CART:
        return {
          ...state,
          carrito: exists
            ? addExistingProduct
            : [...state.carrito, { ...action.producto, cantidad: 1 }],
        }
      case UPDATE_CANTIDAD_PRODUCTO:
        return {
          ...state,
          carrito: state.carrito.map((producto: ProductoType) =>
            producto.id === action.id
              ? { ...producto, cantidad: action.cantidad }
              : producto
          ),
        }
      case REMOVE_PRODUCTO_FROM_CART:
        return {
          ...state,
          carrito: state.carrito.filter(
            ({ id }: { id: number }) => action.id !== id
          ),
        }
      case CLEAR_CARRITO:
        return {
          ...state,
          carrito: [],
        }

      default:
        return state
    }
  }, [])
  const [state, dispatch] = useReducer(rootReducer, initState)

  useEffect(() => {
    dispatch(getProductosFromLocalStore())
  }, [])

  useEffect(() => {
    if (state.carrito.length > 0) {
      localStorage.setItem('carrito', JSON.stringify(state))
    }
  }, [state])

  return (
    <shoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </shoppingCartContext.Provider>
  )
}

export default RootContext
