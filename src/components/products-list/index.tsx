import Image from 'next/image'

import { formatCurrency } from '@/functions/format-currency'
import type { IGetAllProductsByCategoryIdReturn } from '@/services/products/interfaces'

import { ProductsListSkeleton } from './components/products-list-skeleton'

type TProps = {
  products: IGetAllProductsByCategoryIdReturn[] | undefined
  productsIsLoading: boolean
}

export function ProductsList({ products, productsIsLoading }: TProps) {
  return (
    <>
      <section className="mt-6 grid grid-cols-2 gap-x-2 gap-y-8 px-2 hover:cursor-pointer md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productsIsLoading
          ? Array.from({ length: 6 }, (_, index) => (
              <ProductsListSkeleton key={index} />
            ))
          : products &&
            products.length > 0 &&
            products.map((product) => (
              <div key={product.id} className="flex w-full flex-col gap-1">
                <Image
                  src={product.productImage[0].url}
                  alt={product.name}
                  width={190}
                  height={190}
                  className="h-auto w-auto rounded-[10px] object-cover"
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
              </div>
            ))}
      </section>

      {!productsIsLoading && !products && (
        <div className="mt-10 flex w-full items-center justify-center">
          <p className="text-center text-sm font-light text-gray-500 md:text-base">
            Nenhum produto encontrado. Verifique a categoria selecionada.
          </p>
        </div>
      )}
    </>
  )
}
