import { httpClient } from '@/configs/http-client'

import type { IGetAllCategoriesReturn } from './interfaces'

export class CategoriesService {
  static async getAllCategories() {
    const { data } =
      await httpClient.get<IGetAllCategoriesReturn[]>('/api/categories')
    return data
  }
}
