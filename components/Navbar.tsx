import Link from 'next/link'

import 'tailwindcss/tailwind.css'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 flex items-center text-white justify-between p-6 sticky top-0">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
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
