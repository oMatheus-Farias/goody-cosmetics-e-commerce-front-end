import { createContext } from 'react'

import type { ICartProduct } from './interfaces/cart-product-interface'

export interface ICartContextValues {
  isOpen: boolean
  products: ICartProduct[]
  toggleCart: () => void
  addProduct: (product: ICartProduct) => void
  increaseProductQuantity: (productId: string) => void
  decreaseProductQuantity: (productId: string) => void
}

export const CartContext = createContext({} as ICartContextValues)
