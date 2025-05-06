'use client'

import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleCheck,
} from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { formatCurrency } from '@/functions/format-currency'
import { useGetProductById } from '@/hooks/products'

import { ProductDetailSkeleton } from '../_components/products-detail-skeleton'

export default function ProductDetail() {
  const router = useRouter()
  const { 'product-id': productId } = useParams()
  const { product, isLoading } = useGetProductById(productId as string)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!productId) {
      router.push('/')
    }
  }, [productId, router])

  function handleBack() {
    router.back()
  }
  function incrementQuantity() {
    setQuantity((prev) => prev + 1)
  }
  function decrementQuantity() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <div className="container mx-auto min-h-full w-full">
      <div className="mx-auto w-full max-w-[1330px] px-2 md:px-5">
        <button
          type="button"
          aria-label="Voltar"
          onClick={handleBack}
          className="mt-4 flex items-center gap-1 text-gray-400 uppercase transition-all duration-150 ease-linear hover:cursor-pointer hover:text-gray-500"
        >
          <ArrowLeft className="w-5" />
          Voltar
        </button>
      </div>

      <section className="mx-auto mt-6 w-full max-w-[1330px] px-2 md:px-5">
        {isLoading ? (
          <ProductDetailSkeleton />
        ) : (
          <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-10">
            <Carousel className="w-full lg:w-2/3">
              <CarouselContent className="relative ml-0 w-full gap-1">
                {product &&
                  product.productImage.map((item) => (
                    <CarouselItem key={item.id} className="pr-0 pl-0">
                      <div className="relative h-80 w-full overflow-hidden rounded-[10px] md:h-[500px] lg:h-[520px]">
                        <Image
                          src={item.url}
                          alt={product.name}
                          fill
                          sizes="full"
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-1" />
              <CarouselNext className="absolute right-1" />
            </Carousel>

            <div className="flex flex-col lg:w-1/3">
              <div className="flex-1">
                <div className="flex flex-col gap-1">
                  <h3 className="text-black uppercase lg:text-xl">
                    {product?.name}
                  </h3>
                  {product?.stockQuantity === 0 ? (
                    <span className="flex w-fit items-center gap-1 rounded-full bg-rose-100 px-4 text-[10px] font-semibold text-rose-500 uppercase">
                      <CircleAlert className="w-3" />
                      Indisponível
                    </span>
                  ) : (
                    <span className="flex w-fit items-center gap-1 rounded-full bg-emerald-100 px-4 text-[10px] font-semibold text-emerald-500 uppercase">
                      <CircleCheck className="w-3" />
                      Disponível
                    </span>
                  )}
                </div>

                <div className="mt-5 flex flex-col">
                  <span className="text-2xl font-normal text-black uppercase">
                    {formatCurrency(product?.currentPrice as number)}
                  </span>
                  <span className="text-sm font-normal text-gray-400 uppercase line-through">
                    De {formatCurrency(product?.oldPrice as number)}
                  </span>
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <Button
                    type="button"
                    disabled={quantity === 1}
                    onClick={decrementQuantity}
                    aria-label="Diminuir quantidade"
                    className="bg-goodycosmetics-primary-300 hover:bg-goodycosmetics-primary-400 flex h-9 w-9 items-center justify-center rounded text-black transition-all duration-150 ease-linear hover:cursor-pointer disabled:bg-gray-200"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <span className="text-normal font-light text-black">
                    {quantity}
                  </span>
                  <Button
                    type="button"
                    onClick={incrementQuantity}
                    className="bg-goodycosmetics-primary-300 hover:bg-goodycosmetics-primary-400 flex h-9 w-9 items-center justify-center rounded text-black transition-all duration-150 ease-linear hover:cursor-pointer"
                    aria-label="Aumentar quantidade"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                <div className="mt-10 flex flex-col gap-0.5">
                  <span className="mt-5 text-sm font-normal text-gray-500 uppercase">
                    Descrição
                  </span>
                  <p className="text-sm font-light text-gray-400">
                    {product?.description}
                  </p>
                </div>
              </div>

              <Button className="bg-goodycosmetics-primary-500 hover:bg-goodycosmetics-primary-600 mt-10 h-12 w-full font-light text-white uppercase transition-all duration-150 ease-linear hover:cursor-pointer">
                Adicionar a cesta
              </Button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
