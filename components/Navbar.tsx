import Link from 'next/link'
import { useState } from 'react'

import useShoppingCartContext from '../hooks/useShoppingCartContext'
import CarritoIcon from './CarritoIcon'
import CartResume from './CartResume'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { state } = useShoppingCartContext()
  const { carrito } = state
  return (
    <>
      <nav className="z-10 bg-blue-500 flex items-center text-white justify-between p-6 sticky top-0">
        <div className="flex items-center mr-6">
          <Link href="/">
            <a className="font-semibold text-xl tracking-tight">ShoppingCart</a>
          </Link>
        </div>
        <div className="flex items-center mr-6">
          <div className="text-sm flex-grow">
            <Link href="/">
              <a className="font-semibold block mt-4 inline-block mt-0 text-teal-200 hover:text-white mr-4">
                Productos
              </a>
            </Link>
          </div>
          <div>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-grey-500 hover:bg-blue-800 mt-4 mt-0"
            >
              <CarritoIcon />
              &nbsp;&nbsp;
              <span className="font-semibold inline-block p-1 rounded">
                {carrito?.length ?? 0}
              </span>
            </button>
          </div>
        </div>
        <CartResume isOpen={isOpen} onLeave={() => setIsOpen(false)} />
      </nav>
    </>
  )
}

export default Navbar
