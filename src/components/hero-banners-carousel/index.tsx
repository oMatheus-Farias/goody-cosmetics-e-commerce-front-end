import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useRef } from 'react'

import { HERO_BANNER_DATA } from '@/constants/hero-banner-data'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

export function HeroBannersCarousel() {
  const plugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      active: true,
      playOnInit: true,
    }),
  )

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="mt-4 w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="relative ml-0 w-full gap-1">
          {HERO_BANNER_DATA.map((item) => (
            <CarouselItem key={item.id} className="pr-0 pl-0">
              <div className="relative h-52 w-full overflow-hidden rounded-2xl sm:h-72 lg:h-[400px]">
                <Image
                  src={item.image.srcMobile}
                  alt={item.image.alt}
                  fill
                  sizes="full"
                  className="object-cover md:hidden"
                />
                <Image
                  src={item.image.srcDesktop}
                  alt={item.image.alt}
                  fill
                  sizes="full"
                  className="hidden object-cover md:block"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-1" />
        <CarouselNext className="absolute right-1" />
      </Carousel>
    </div>
  )
}
