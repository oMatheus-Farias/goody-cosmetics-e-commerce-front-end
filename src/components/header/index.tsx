'use client'

import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'
import { useCart } from '@/hooks/cart/use-cart'

import { Button } from '../ui/button'
import { NavigateMenu } from './components/navigate-menu'

export function Header() {
  const { toggleCart } = useCart()

  function handleToggleCart() {
    toggleCart()
  }

  return (
    <header className="sticky top-0 left-0 z-10 h-14 min-h-14 w-full border border-b-gray-200 bg-white/90 px-2 backdrop-blur-xs md:px-5">
      <div className="mx-auto flex h-full w-full max-w-[1330px] items-center justify-between">
        <NavigateMenu />
        <Link href="/">
          <Image
            src={logo}
            alt="Goody Cosmetics"
            height={40}
            width={80}
            className="h-auto w-auto"
          />
        </Link>
        <Button
          variant="ghost"
          type="button"
          aria-label="Abrir cesta"
          onClick={handleToggleCart}
          className="hover:cursor-pointer"
        >
          <ShoppingBasket />
        </Button>
      </div>
    </header>
  )
}
