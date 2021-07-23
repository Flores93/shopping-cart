import { useContext } from 'react'

import { shoppingCartContext } from '../context/RootContext'

const useShoppingCartContext = () => useContext(shoppingCartContext)

export default useShoppingCartContext
