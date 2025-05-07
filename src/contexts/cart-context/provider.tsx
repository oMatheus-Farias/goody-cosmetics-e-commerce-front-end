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

  const totalGrossPrice = products.reduce((acc, product) => {
    return acc + product.oldPrice * product.quantity
  }, 0)
  const totalDiscount = products.reduce((acc, product) => {
    return acc + (product.oldPrice - product.currentPrice) * product.quantity
  }, 0)
  const totalPrice = totalGrossPrice - totalDiscount

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
  function increaseProductQuantity(productId: string) {
    setProducts((prev) => {
      return prev.map((prevProduct) => {
        if (prevProduct.id !== productId) {
          return prevProduct
        }
        return {
          ...prevProduct,
          quantity: prevProduct.quantity + 1,
        }
      })
    })
  }
  function decreaseProductQuantity(productId: string) {
    setProducts((prev) => {
      return prev.map((prevProduct) => {
        if (prevProduct.id !== productId) {
          return prevProduct
        }
        if (prevProduct.quantity === 1) {
          return prevProduct
        }
        return {
          ...prevProduct,
          quantity: prevProduct.quantity - 1,
        }
      })
    })
  }
  function removeProduct(productId: string) {
    setProducts((prev) => {
      return prev.filter((prevProduct) => prevProduct.id !== productId)
    })
  }

  const value: ICartContextValues = {
    isOpen,
    products,
    totalGrossPrice,
    totalDiscount,
    totalPrice,
    setProducts,
    toggleCart,
    addProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
