import Image from 'next/image'
import Link from 'next/link'

import useShoppingCartContext from '../hooks/useShoppingCartContext'
import { imageLoader } from '../utils/imagesUtils'
import { ProductoType } from './ProductoCard'

type CartResume = {
  isOpen: boolean
  onLeave: () => void
}

const CartResume = ({ isOpen, onLeave }: CartResume) => {
  const {
    state: { carrito },
  } = useShoppingCartContext()
  const existsProductos = carrito.length > 0
  return (
    <>
      {isOpen && (
        <div
          onMouseLeave={onLeave}
          className="z-20 flex absolute border rounded border-blue-500 top-24 right-0.5"
        >
          <div className="max-w-sm rounded shadow-lg bg-white">
            <div className="relative flex justify-center">
              <div className="bg-white border-top absolute right-20 w-3 h-3 transform rotate-45 -mt-1"></div>
            </div>
            <div className="grid grid-flow-col p-2 m-2 text-gray-600 rounded font-bold text-center bg-blue-200 w-11/12">
              <div className="col text-left">Producto:</div>
              <div className="col text-right">Cant:</div>
            </div>
            <div className="grid grid-flow-row max-h-80 min-h-48 mt-6 justify-items-center overflow-auto">
              {existsProductos ? (
                carrito.map((producto: ProductoType) => (
                  <div
                    key={producto.id}
                    className="col p-2 m-2 text-gray-600 rounded font-bold text-center bg-blue-200 w-11/12"
                  >
                    <div className="grid grid-flow-col justify-items-stretch">
                      <div className="col m-0">
                        <Image
                          loader={() => imageLoader(producto.cover)}
                          src={producto.cover}
                          alt="a cat"
                          layout="fixed"
                          width="40"
                          height="40"
                          className="rounded inline-block"
                        />
                      </div>
                      <div className="h-12 overflow-auto p-2 w-52 col">
                        <small>{producto.name}</small>
                      </div>
                      <div className="col p-2 text-black">
                        {producto.cantidad}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-2 m-2 text-gray-600 font-bold text-center w-11/12">
                  No has agregado ningun producto al carrito...
                </div>
              )}
            </div>
            {existsProductos ? (
              <div className="px-6 py-4">
                <Link href="/carrito">
                  <a className="font-semibold block mt-4 inline-block mt-0 text-blue-500 hover:text-blue-800 mr-4">
                    Ir al carrito
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default CartResume
