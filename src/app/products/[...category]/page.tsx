'use client'

import { ArrowDownUp, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

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
import { useGetAllProductsByCategoryId } from '@/hooks/products'

export default function ProductsByCategory() {
  const params = useParams()
  const router = useRouter()

  const [categoryId, categoryName] = params.category || []
  const decodedCategoryName = categoryName
    ? decodeURIComponent(categoryName)
    : ''

  useEffect(() => {
    if (!categoryId || !categoryName) {
      router.push('/')
    }
  }, [categoryId, categoryName, router])

  const [selectedOrder, setSelectedOrder] = useState<string>(
    PRODUCTS_ORDENATION[0].value,
  )

  const { products, isLoading } = useGetAllProductsByCategoryId({
    categoryId: categoryId as string,
    ordenation: selectedOrder,
  })

  return (
    <div className="container mx-auto min-h-screen w-full">
      <div className="mx-auto w-full max-w-[1330px] px-2 md:px-5">
        <Link
          href="/"
          className="mt-4 flex items-center gap-1 text-gray-400 uppercase transition-all duration-150 ease-linear hover:text-gray-500"
        >
          <ArrowLeft className="w-5" />
          Voltar
        </Link>

        <div className="mt-5 flex w-full items-center justify-between">
          <h1 className="text-black uppercase">{decodedCategoryName}</h1>

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
      </div>
      <div className="mt-5 w-full">
        <ProductsList products={products} productsIsLoading={isLoading} />
      </div>
    </div>
  )
}
