import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'

import logo from '@/assets/logo.svg'

import { Button } from '../ui/button'
import { NavigateMenu } from './components/navigate-menu'

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-10 h-14 min-h-14 w-full border border-b-gray-200 bg-white/90 px-2 backdrop-blur-xs md:px-5">
      <div className="mx-auto flex h-full w-full max-w-[1330px] items-center justify-between">
        <NavigateMenu />
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
      </div>
    </header>
  )
}
