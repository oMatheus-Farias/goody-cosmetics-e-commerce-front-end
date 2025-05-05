import { useQuery } from '@tanstack/react-query'

import { ProductsService } from '@/services/products'

export function useGetProductById(productId: string) {
  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => ProductsService.getProductById(productId),
  })
  return { product, isLoading }
}
