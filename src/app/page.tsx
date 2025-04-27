import { ArrowDownUp, SlidersHorizontal } from 'lucide-react'
import Image from 'next/image'

import heroBannerDesktop from '@/assets/hero-banner-desktop.jpg'
import heroBannerMobile from '@/assets/hero-banner-mobile.jpg'
import kitMake from '@/assets/kit-make.png'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen w-full">
      <div className="w-full px-2">
        <div className="relative mt-4 h-52 w-full overflow-hidden rounded-2xl md:h-72">
          <Image
            src={heroBannerMobile}
            alt="Promoção de Black Friday"
            fill
            sizes="full"
            className="object-cover md:hidden"
          />
          <Image
            src={heroBannerDesktop}
            alt="Promoção de Black Friday"
            fill
            sizes="full"
            className="hidden object-cover md:block"
          />
        </div>
      </div>

      <div className="mt-5 flex w-full items-center justify-start gap-3.5 px-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <SlidersHorizontal className="w-3" />
            <span className="text-sm text-black uppercase">Filtrar</span>
          </div>

          <Select>
            <SelectTrigger className="w-[100px] rounded">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="uppercase">Categorias</SelectLabel>
                <SelectItem value="all" className="uppercase">
                  Todas
                </SelectItem>
                <SelectItem value="skin-care" className="uppercase">
                  Skin Care
                </SelectItem>
                <SelectItem value="mouth" className="uppercase">
                  Boca
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <ArrowDownUp className="w-3" />
            <span className="text-sm text-black uppercase">Ordenar</span>
          </div>

          <Select>
            <SelectTrigger className="w-[120px] rounded">
              <SelectValue placeholder="Ordem" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="uppercase">Ordem</SelectLabel>
                <SelectItem value="all" className="uppercase">
                  Menor preço
                </SelectItem>
                <SelectItem value="skin-care" className="uppercase">
                  Maior preço
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <section className="mt-6 grid grid-cols-2 gap-x-2 gap-y-8 px-2 hover:cursor-pointer md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="flex w-full flex-col gap-1">
            <Image
              src={kitMake}
              alt="Produto"
              width={190}
              height={190}
              className="h-auto w-auto rounded-[10px] object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm font-normal text-gray-400 uppercase">
                Kit Make
              </span>
              <div className="flex items-center gap-1">
                <span className="text-base font-normal text-black">
                  R$ 99,90
                </span>
                <span className="text-sm font-normal text-gray-500 line-through">
                  R$ 199,90
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
