import { httpClient } from '@/configs/http-client'

import type {
  IGetAllProductsByCategoryIdProps,
  IGetProductReturn,
} from './interfaces'

export class ProductsService {
  static async getProductById(productId: string) {
    const { data } = await httpClient.get<IGetProductReturn>(
      `/api/products/${productId}`,
    )
    return data
  }
  static async getAllProductsByCategoryId({
    categoryId,
    ordenation,
  }: IGetAllProductsByCategoryIdProps) {
    const { data } = await httpClient.get<IGetProductReturn[]>(
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
