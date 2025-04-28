import { httpClient } from '@/configs/http-client'

import type {
  IGetAllProductsByCategoryIdProps,
  IGetAllProductsByCategoryIdReturn,
} from './interfaces'

export class ProductsService {
  static async getAllProductsByCategoryId({
    categoryId,
    ordenation,
  }: IGetAllProductsByCategoryIdProps) {
    const { data } = await httpClient.get<IGetAllProductsByCategoryIdReturn[]>(
      '/api/products/category',
      {
        params: {
          ...(categoryId && categoryId !== 'all' ? { categoryId } : {}),
          ordenation,
        },
      },
    )
    return data
  }
}
