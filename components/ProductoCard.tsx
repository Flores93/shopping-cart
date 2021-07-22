import Image from 'next/image'

import { imageLoader } from '../utils/imagesUtils'

const ProductoCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-6/12 md:w-4/12 m-5">
      <div>
        <div>
          <Image
            loader={imageLoader}
            src={`https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01ezx1kw7gftqdqgva8tacvdee/open-uri20210303-25404-15zyo0r_original.?1614808740`}
            alt="a cat"
            layout="responsive"
            width="5"
            height="5"
            className="h-full object-cover w-full"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Case study
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductoCard
