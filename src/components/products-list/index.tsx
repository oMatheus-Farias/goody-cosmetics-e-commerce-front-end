import Image from 'next/image'
import Link from 'next/link'

import { formatCurrency } from '@/functions/format-currency'
import type { IGetProductReturn } from '@/services/products/interfaces'

import { ProductsListSkeleton } from './components/products-list-skeleton'

type TProps = {
  products: IGetProductReturn[] | undefined
  productsIsLoading: boolean
}

export function ProductsList({ products, productsIsLoading }: TProps) {
  return (
    <>
      <section className="mt-6 grid max-w-[1330px] grid-cols-2 justify-items-center gap-x-2 gap-y-8 px-2 md:grid-cols-3 md:px-5 lg:grid-cols-4 lg:gap-x-6 xl:grid-cols-5 2xl:grid-cols-6">
        {productsIsLoading
          ? Array.from({ length: 6 }, (_, index) => (
              <ProductsListSkeleton key={index} />
            ))
          : products &&
            products.length > 0 &&
            products.map((product) => (
              <Link
                key={product.id}
                href={`/product-detail/${product.id}`}
                className="flex w-fit flex-col gap-1 hover:cursor-pointer"
              >
                <Image
                  src={product.productImage[0].url}
                  alt={product.name}
                  width={190}
                  height={190}
                  priority
                  className="h-52 w-52 rounded-[10px] object-cover transition-transform duration-200 ease-linear hover:scale-[1.01]"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-normal text-gray-400 uppercase">
                    {product.name}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-base font-normal text-black">
                      {formatCurrency(product.currentPrice)}
                    </span>
                    <span className="text-sm font-normal text-gray-500 line-through">
                      {formatCurrency(product.oldPrice)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
      </section>

      {!productsIsLoading && products && products?.length <= 0 && (
        <div className="mt-10 flex w-full items-center justify-center">
          <p className="text-center text-sm font-light text-gray-500 md:text-base">
            Nenhum produto encontrado. Verifique a categoria selecionada.
          </p>
        </div>
      )}
    </>
  )
}
