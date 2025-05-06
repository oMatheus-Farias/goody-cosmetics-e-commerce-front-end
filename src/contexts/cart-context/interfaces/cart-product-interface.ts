import type { IGetProductReturn } from '@/services/products/interfaces'

export interface ICartProduct extends IGetProductReturn {
  quantity: number
}
