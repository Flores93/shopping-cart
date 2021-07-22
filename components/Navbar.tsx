import Link from 'next/link'

import CarritoIcon from './CarritoIcon'

const Navbar = () => {
  return (
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
          <Link href="/carrito">
            <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-grey-500 hover:bg-blue-800 mt-4 mt-0">
              <CarritoIcon />
              &nbsp;&nbsp;
              <span className="font-semibold inline-block">0</span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
