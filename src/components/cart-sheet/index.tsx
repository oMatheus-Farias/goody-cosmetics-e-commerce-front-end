import { formatCurrency } from '@/functions/format-currency'
import { useCart } from '@/hooks/cart/use-cart'

import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet'
import { CartItems } from './components/cart-items'

export function CartSheet() {
  const { isOpen, toggleCart, products } = useCart()
  const totalGrossPrice = products.reduce((acc, product) => {
    return acc + product.oldPrice * product.quantity
  }, 0)
  const totalDiscount = products.reduce((acc, product) => {
    return acc + (product.oldPrice - product.currentPrice) * product.quantity
  }, 0)
  const totalPrice = totalGrossPrice - totalDiscount

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-[90%]">
        <SheetHeader>
          <SheetTitle className="text-goodycosmetics-primary-500 text-center font-normal uppercase">
            Sua cesta
          </SheetTitle>
          <SheetDescription className="text-center text-sm font-light text-gray-500">
            Os pedidos são direcionados ao Whatsapp da loja.
          </SheetDescription>
        </SheetHeader>
        {products.length > 0 ? (
          <div className="flex h-full w-full flex-col px-4 pb-4">
            <div className="flex w-full flex-1 flex-col gap-5">
              {products.map((product) => (
                <CartItems key={product.id} product={product} />
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex w-full flex-col gap-2 rounded-[10px] border border-gray-200 p-4">
                <div className="flex items-center justify-between text-sm font-light uppercase">
                  <span>Subtotal</span>
                  <span>{formatCurrency(totalGrossPrice)}</span>
                </div>
                <Separator className="bg-gray-100" />
                <div className="flex items-center justify-between text-sm font-light uppercase">
                  <span>Descontos</span>
                  <span>
                    {'-'} {formatCurrency(totalDiscount)}
                  </span>
                </div>
                <Separator className="bg-gray-100" />
                <div className="flex items-center justify-between text-sm font-normal uppercase">
                  <span>Total</span>
                  <span>{formatCurrency(totalPrice)}</span>
                </div>
              </div>

              <Button
                type="button"
                aria-label="Finalizar pedido"
                className="bg-goodycosmetics-primary-500 hover:bg-goodycosmetics-primary-600 h-12 w-full font-light text-white uppercase transition-all duration-150 ease-linear hover:cursor-pointer"
              >
                Finalizar pedido
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-center">
            <span className="text-center text-sm font-light text-gray-500">
              Sua cesta está vazia :(
            </span>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
