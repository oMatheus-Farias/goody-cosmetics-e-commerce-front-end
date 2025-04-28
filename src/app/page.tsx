'use client'

import { ArrowDownUp, LoaderCircle, SlidersHorizontal } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import heroBannerDesktop from '@/assets/hero-banner-desktop.jpg'
import heroBannerMobile from '@/assets/hero-banner-mobile.jpg'
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

          <Select
            onValueChange={(value) => setSelectedCategory(value)}
            defaultValue="all"
          >
            <SelectTrigger className="w-[100px] rounded">
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
            <SelectTrigger className="w-[120px] rounded">
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

      <section className="mt-6 grid grid-cols-2 gap-x-2 gap-y-8 px-2 hover:cursor-pointer md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productsIsLoading && categoriesIsLoading ? (
          <div className="col-span-2 flex items-center justify-center gap-1 rounded bg-white p-4 shadow-md md:col-span-3 lg:col-span-4 xl:col-span-5">
            <LoaderCircle className="animate-spin" />
            Carregando produtos...
          </div>
        ) : products && products.length > 0 ? (
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
                    {product.currentPrice}
                  </span>
                  <span className="text-sm font-normal text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 flex items-center justify-center gap-1 rounded bg-white p-4 shadow-md md:col-span-3 lg:col-span-4 xl:col-span-5">
            Nenhum produto encontrado.
          </div>
        )}
      </section>
    </div>
  )
}
