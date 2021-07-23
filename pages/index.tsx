import { useEffect } from 'react'

import ProductoCard from '../components/ProductoCard'
import type { ProductoType } from '../components/ProductoCard'
import { AddProductoToCart } from '../context/actions/shoppingCartActions'
import { GET_ALL_DATA } from '../context/constants'
import useShoppingCartContext from '../hooks/useShoppingCartContext'

export const getStaticProps = async () => {
  const res = await fetch(`https://products-api-meru.vercel.app/api/products`)
  const data = await res.json()

  return {
    props: {
      productos: data,
    },
  }
}

type ProductosProps = {
  productos: ProductoType[]
}

export default function Home({ productos }: ProductosProps) {
  const { dispatch } = useShoppingCartContext()
  const addToCart = (producto: ProductoType) =>
    dispatch(AddProductoToCart(producto))

  useEffect(() => {
    dispatch({
      type: GET_ALL_DATA,
      data:
        (typeof window !== 'undefined' &&
          JSON.parse(localStorage.getItem('carrito'))) ||
        [],
    })
  }, [dispatch])

  return (
    <div className="grid grid-flow-row md:grid-rows-4 md:grid-flow-col">
      {productos.map((producto) => (
        <div key={producto.id}>
          <ProductoCard {...producto} addToCart={addToCart} />
        </div>
      ))}
    </div>
  )
}
