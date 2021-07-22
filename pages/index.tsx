import ProductoCard from '../components/ProductoCard'

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
  productos: {
    id: number
    name: string
    cover: string
    price: string
  }[]
}

export default function Home({ productos }: ProductosProps) {
  const addToCart = (id: number) => console.log(id)

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
