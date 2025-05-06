import { useContext } from 'react'

import { CartContext } from '@/contexts/cart-context/context'

export function useCart() {
  return useContext(CartContext)
}
