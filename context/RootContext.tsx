import React, { useCallback, createContext, useReducer, useEffect } from 'react'

import type { ProductoType } from '../components/ProductoCard'
import { ADD_TO_CART, GET_ALL_DATA, REMOVE_FROM_CART } from './constants'

type ContextData = {
  state: {
    carrito: ProductoType[]
  }
  dispatch: ({
    type,
    producto,
    data,
  }: {
    type: string
    producto?: ProductoType
    data?: ProductoType[]
  }) => void
}

const initState = {
  carrito: [],
}

export const shoppingCartContext = createContext<ContextData>({})

const RootContext = ({ children }: { children: React.ReactElement }) => {
  const rootReducer = useCallback((state = {}, action) => {
    const exists = state.carrito.some(
      (producto: ProductoType) => action.producto.id === producto.id
    )

    const addExistingProduct = state.carrito.map((producto: ProductoType) =>
      producto.id === action.producto.id
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
      case REMOVE_FROM_CART:
        return {
          ...state,
          carrito: state.carrito.filter(
            ({ id }: { id: number }) => action.id !== id
          ),
        }

      default:
        return state
    }
  }, [])
  const [state, dispatch] = useReducer(rootReducer, initState)

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
