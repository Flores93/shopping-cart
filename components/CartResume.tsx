import Link from 'next/link'

type CartResume = {
  isOpen: boolean
  onLeave: () => void
}

const CartResume = ({ isOpen, onLeave }: CartResume) => {
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
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <Link href="/carrito">
                <a className="font-semibold block mt-4 inline-block mt-0 text-blue-500 hover:text-blue-800 mr-4">
                  Ir al carrito
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CartResume
