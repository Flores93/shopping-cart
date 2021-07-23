import Image from 'next/image'

import CarritoIcon from '../components/CarritoIcon'
import { imageLoader } from '../utils/imagesUtils'

export type ProductoType = {
  name: string
  cover: string
  price: string
  id: number
  cantidad?: number
}

type ProductoCard = {
  id: number
  name: string
  cover: string
  price: string
  addToCart: ({ name, cover, price, id }: ProductoType) => void
}

const ProductoCard = ({ name, cover, price, id, addToCart }: ProductoCard) => {
  return (
    <div className="col max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-full md:w-9/12 mt-5 m-5">
      <div>
        <div>
          <Image
            loader={() => imageLoader(cover)}
            src={cover}
            alt="a cat"
            layout="responsive"
            width="15"
            height="15"
            className="h-full object-cover w-full"
          />
        </div>
        <div className="p-6">
          <div className="overflow-auto h-20">
            <p className="break-words mt-2 text-gray-500">{name}</p>
          </div>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            $ {price}
          </div>
        </div>
        <div className="p-6">
          <button
            type="button"
            className="rounded text-white bg-blue-500 hover:bg-blue-700 p-3"
            onClick={() => addToCart({ name, cover, price, id })}
          >
            <small>
              <span>Agreagr al carrito</span> <CarritoIcon />
            </small>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductoCard
