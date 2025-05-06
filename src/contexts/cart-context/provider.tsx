'use client'

import { JSX, useState } from 'react'

import { CartContext, ICartContextValues } from './context'
import type { ICartProduct } from './interfaces/cart-product-interface'

type TProps = {
  children: React.ReactNode
}

export function CartProvider({ children }: TProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [products, setProducts] = useState<ICartProduct[]>([])

  function toggleCart() {
    setIsOpen((prev) => !prev)
  }
  function addProduct(product: ICartProduct) {
    const productIsAlreadyInCart = products.some(
      (prev) => prev.id === product.id,
    )
    if (!productIsAlreadyInCart) {
      return setProducts((prev) => [...prev, product])
    }
    setProducts((prev) => {
      return prev.map((prevProduct) => {
        if (prevProduct.id === product.id) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity + product.quantity,
          }
        }
        return prevProduct
      })
    })
  }

  const value: ICartContextValues = {
    isOpen,
    products,
    toggleCart,
    addProduct,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
