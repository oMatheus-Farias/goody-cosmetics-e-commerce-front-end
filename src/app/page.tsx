'use client'

import { ArrowDownUp, LoaderCircle, SlidersHorizontal } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import heroBannerDesktop from '@/assets/hero-banner-desktop.jpg'
import heroBannerMobile from '@/assets/hero-banner-mobile.jpg'
import { ProductsList } from '@/components/products-list'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { PRODUCTS_ORDENATION } from '@/constants/products-ordenation'
import { useGetAllCategories } from '@/hooks/categories'
import { useGetAllProductsByCategoryId } from '@/hooks/products'

export default function Home() {
  const { categories, isLoading: categoriesIsLoading } = useGetAllCategories()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedOrder, setSelectedOrder] = useState<string>(
    PRODUCTS_ORDENATION[0].value,
  )
  const { products, isLoading: productsIsLoading } =
    useGetAllProductsByCategoryId({
      categoryId: selectedCategory || '',
      ordenation: selectedOrder,
    })

  return (
    <div className="container mx-auto min-h-screen w-full">
      <div className="w-full px-2 md:px-5">
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

      <div className="mt-5 flex w-full items-center justify-start gap-3.5 px-2 md:px-5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <SlidersHorizontal className="w-3" />
            <span className="text-sm text-black uppercase">Filtrar</span>
          </div>

          <Select
            onValueChange={(value) => setSelectedCategory(value)}
            defaultValue="all"
          >
            <SelectTrigger className="w-[100px] rounded hover:cursor-pointer">
              <SelectValue
                placeholder="CATEGORIAS"
                className="uppercase"
                defaultValue="all"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="uppercase">Categorias</SelectLabel>
                {categoriesIsLoading ? (
                  <SelectItem
                    value="loading"
                    disabled
                    className="flex items-center gap-1 uppercase"
                  >
                    <LoaderCircle className="animate-spin" />
                    Carregando...
                  </SelectItem>
                ) : categories && categories.length > 0 ? (
                  categories
                    .filter((category) => category.id) // Garante que o id não é vazio
                    .map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id}
                        className="uppercase"
                      >
                        <span className="uppercase">{category.name}</span>
                      </SelectItem>
                    ))
                ) : (
                  <SelectItem
                    value="no-category"
                    disabled
                    className="uppercase"
                  >
                    Nenhuma categoria encontrada.
                  </SelectItem>
                )}
                <SelectItem value="all">TODAS</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <ArrowDownUp className="w-3" />
            <span className="text-sm text-black uppercase">Ordenar</span>
          </div>

          <Select
            onValueChange={(value) => setSelectedOrder(value)}
            defaultValue={PRODUCTS_ORDENATION[0].value}
          >
            <SelectTrigger className="w-[120px] rounded hover:cursor-pointer">
              <SelectValue
                placeholder="Ordem"
                defaultValue={PRODUCTS_ORDENATION[0].value}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="uppercase">Ordem</SelectLabel>
                {PRODUCTS_ORDENATION.map((ordenation) => (
                  <SelectItem
                    key={ordenation.id}
                    value={ordenation.value}
                    className="uppercase"
                  >
                    {ordenation.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ProductsList products={products} productsIsLoading={productsIsLoading} />
    </div>
  )
}
