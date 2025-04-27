import { Menu, ShoppingBasket } from 'lucide-react'
import Image from 'next/image'

import logo from '@/assets/logo.svg'

import { Button } from '../ui/button'

export function Header() {
  return (
    <header className="min-14 sticky top-0 z-10 flex h-14 w-full items-center justify-between border border-b-gray-200 bg-white/80 px-2 backdrop-blur-xs">
      <Button variant="ghost" className="hover:cursor-pointer">
        <Menu />
      </Button>
      <Image
        src={logo}
        alt="Goody Cosmetics"
        height={40}
        width={80}
        className="h-auto w-auto"
      />
      <Button variant="ghost" className="hover:cursor-pointer">
        <ShoppingBasket />
      </Button>
    </header>
  )
}
