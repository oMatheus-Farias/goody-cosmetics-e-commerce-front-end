import { useCart } from '@/hooks/cart/use-cart'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet'

export function CartSheet() {
  const { isOpen, toggleCart, products } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-goodycosmetics-primary-500 text-center font-normal uppercase">
            Sua cesta
          </SheetTitle>
          <SheetDescription className="text-center text-sm font-light text-gray-500">
            Os pedidos são direcionados ao Whatsapp da loja.
          </SheetDescription>
        </SheetHeader>
        {products.length > 0 ? (
          <div className="flex w-full flex-col gap-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex w-full items-center justify-between rounded border border-gray-200 p-2"
              >
                <span className="text-sm font-light text-gray-500">
                  {product.name}
                </span>
                <span className="text-sm font-light text-gray-500">
                  {product.currentPrice}
                </span>
                <span className="text-sm font-light text-gray-500">
                  {product.quantity}
                </span>
              </div>
            ))}
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
