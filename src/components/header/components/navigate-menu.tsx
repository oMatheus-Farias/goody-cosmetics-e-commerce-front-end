'use client'

import { Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { SocialMedia } from '@/components/social-media'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useGetAllCategories } from '@/hooks/categories'

import { NavigateMenuSkeleton } from './navigate-menu-skeleton'

export function NavigateMenu() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { categories, isLoading } = useGetAllCategories()

  function handleNavigation(categoryId: string, categoryName: string) {
    router.push(`/products/${categoryId}/${categoryName}`)
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="hover:cursor-pointer">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-4">
        <SheetHeader>
          <SheetTitle className="text-goodycosmetics-primary-700 text-center font-light uppercase">
            Menu
          </SheetTitle>
          <SheetDescription className="text-center">
            Encontre o que precisa com facilidade! Navegue pelas categorias e
            explore nossa seleção de produtos.
          </SheetDescription>
        </SheetHeader>
        <div className="flex max-h-[90%] w-full flex-col gap-6 overflow-y-auto">
          {isLoading ? (
            <NavigateMenuSkeleton />
          ) : categories && categories.length > 0 ? (
            categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleNavigation(category.id, category.name)}
                className="text-goodycosmetics-primary-700 hover:text-goodycosmetics-primary-800 flex h-12 min-h-12 items-center justify-center rounded-[6px] bg-gray-100 font-normal uppercase shadow transition-all duration-150 ease-linear hover:cursor-pointer hover:bg-gray-200"
              >
                <span>{category.name}</span>
              </button>
            ))
          ) : (
            <p className="text-center text-sm font-light text-gray-500">
              Nenhuma categoria encontrada.
            </p>
          )}
        </div>
        <SheetFooter className="flex items-center justify-center">
          <SocialMedia />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
