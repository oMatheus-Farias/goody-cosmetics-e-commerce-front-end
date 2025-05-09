import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { IGetProductReturn } from '@/services/products/interfaces'

type TProps = {
  product: IGetProductReturn | undefined
}

export function ProductsDetailCarousel({ product }: TProps) {
  return (
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
                  priority
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-1" />
      <CarouselNext className="absolute right-1" />
    </Carousel>
  )
}
