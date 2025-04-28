import { useQuery } from '@tanstack/react-query'

import { ProductsService } from '@/services/products'
import type { IGetAllProductsByCategoryIdProps } from '@/services/products/interfaces'

export function useGetAllProductsByCategoryId({
  categoryId,
  ordenation,
}: IGetAllProductsByCategoryIdProps) {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products', categoryId, ordenation],
    queryFn: () =>
      ProductsService.getAllProductsByCategoryId({ categoryId, ordenation }),
  })
  return { products, isLoading }
}
