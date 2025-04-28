import { useQuery } from '@tanstack/react-query'

import { CategoriesService } from '@/services/categories'

export function useGetAllCategories() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: CategoriesService.getAllCategories,
  })
  return { categories, isLoading }
}
