import { ChevronLeft, ChevronRight, Trash2 } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import type { ICartProduct } from '@/contexts/cart-context/interfaces/cart-product-interface'
import { formatCurrency } from '@/functions/format-currency'
import { useCart } from '@/hooks/cart/use-cart'

type TProps = {
  product: ICartProduct
}

export function CartItems({ product }: TProps) {
  const { increaseProductQuantity, decreaseProductQuantity } = useCart()

  return (
    <div className="flex w-full gap-2">
      <Image
        src={product.productImage[0].url}
        alt={product.name}
        width={100}
        height={100}
        sizes="all"
        className="h-[100px] w-[100px] rounded-[10px] object-cover"
      />

      <div className="flex w-full items-center justify-between">
        <div className="flex h-full flex-col">
          <div className="flex-1">
            <span className="text-sm font-light text-gray-600 uppercase">
              {product.name}
            </span>
            <div className="flex items-end gap-0.5">
              <span className="text-sm font-light text-gray-600 uppercase">
                {formatCurrency(product.currentPrice)}
              </span>
              <span className="text-xs font-light text-gray-400 line-through">
                {formatCurrency(product.oldPrice)}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="button"
              disabled={product.quantity === 1}
              aria-label="Diminuir quantidade"
              onClick={() => decreaseProductQuantity(product.id)}
              className="bg-goodycosmetics-primary-300 hover:bg-goodycosmetics-primary-400 flex h-9 w-9 items-center justify-center rounded text-black transition-all duration-150 ease-linear hover:cursor-pointer disabled:bg-gray-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <span className="text-normal font-light text-black">
              {product.quantity}
            </span>
            <Button
              type="button"
              aria-label="Aumentar quantidade"
              onClick={() => increaseProductQuantity(product.id)}
              className="bg-goodycosmetics-primary-300 hover:bg-goodycosmetics-primary-400 flex h-9 w-9 items-center justify-center rounded text-black transition-all duration-150 ease-linear hover:cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Button
          variant="ghost"
          size="lg"
          title="Remover produto"
          aria-label="Remover produto"
          className="group hover:cursor-pointer"
        >
          <Trash2 className="text-gray-600 transition-all duration-150 ease-linear group-hover:text-rose-500" />
        </Button>
      </div>
    </div>
  )
}
