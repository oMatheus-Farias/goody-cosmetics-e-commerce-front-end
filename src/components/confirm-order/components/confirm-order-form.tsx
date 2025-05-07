import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, LoaderCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { env } from '@/configs/env-configs'
import { formatCurrency } from '@/functions/format-currency'
import { useCart } from '@/hooks/cart/use-cart'
import { userNameSchema } from '@/schemas/user-name-schema'

export type TConfirmOrderForm = z.infer<typeof userNameSchema>
type TProps = {
  onOpenChange: (value: boolean) => void
}

export function ConfirmOrderForm({ onOpenChange }: TProps) {
  const { products, setProducts, totalPrice } = useCart()
  const form = useForm<TConfirmOrderForm>({
    resolver: zodResolver(userNameSchema),
    defaultValues: {
      userName: '',
    },
  })
  const isPending = form.formState.isSubmitting
  const userName = form.watch('userName')

  function handleConfirmOrder(data: TConfirmOrderForm) {
    const currentDate = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })

    const formattedProducts = products
      .map(
        (product) =>
          `* Produto:\n  ${product.name}\n  Quantidade: ${product.quantity}\n  Preço Unitário: ${formatCurrency(
            product.currentPrice,
          )}`,
      )
      .join('\n\n')

    const message = `*Boas notícias! Um novo pedido foi realizado!*\n\n*Data do pedido:* ${currentDate}\n\nOlá, meu nome é *${data.userName}*.\n\nGostaria de finalizar o pedido com os seguintes itens:\n\n${formattedProducts}\n\n*Total do pedido:* ${formatCurrency(
      totalPrice,
    )}\n`
    const whatsappNumber = env.NEXT_PUBLIC_WHATSAPP_NUMBER
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(whatsappLink, '_blank')
    form.reset()
    setProducts([])
    onOpenChange(false)
  }
  function handleCancelOrder() {
    form.reset()
    onOpenChange(false)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleConfirmOrder)}
        className="flex h-full w-full flex-col"
      >
        <FormField
          name="userName"
          control={form.control}
          render={() => (
            <FormItem className="flex-1">
              <FormControl>
                <div className="flex flex-col gap-1">
                  <Label
                    htmlFor="userName"
                    className="text-goodycosmetics-primary-700 text-xs font-normal uppercase"
                  >
                    Seu nome
                  </Label>
                  <Input
                    id="userName"
                    type="text"
                    autoFocus
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    aria-label="Nome"
                    placeholder="Informe seu nome"
                    {...form.register('userName')}
                    className={`h-12 rounded-[10px] border bg-white font-light placeholder:text-gray-400 ${form.formState.errors.userName ? 'border-rose-500 focus-visible:ring-rose-300' : 'border-goodycosmetics-primary-400 focus-visible:ring-goodycosmetics-primary-200'}`}
                  />
                  {form.formState.errors.userName && (
                    <div className="flex items-center gap-2 font-light text-rose-500">
                      <AlertCircle className="max-h-2.5 min-h-2.5 max-w-2.5 min-w-2.5" />
                      <FormMessage className="text-xs" />
                    </div>
                  )}
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex w-full flex-col gap-2">
          <Button
            type="submit"
            aria-label="Finalizar"
            disabled={isPending || userName.length < 3}
            className="bg-goodycosmetics-primary-500 hover:bg-goodycosmetics-primary-600 h-12 w-full rounded-[10px] font-light uppercase transition-all duration-150 ease-linear hover:cursor-pointer"
          >
            {isPending ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              'Finalizar'
            )}
          </Button>
          <Button
            variant="outline"
            type="button"
            aria-label="Cancelar"
            disabled={isPending}
            onClick={handleCancelOrder}
            className="h-12 w-full rounded-[10px] font-light uppercase transition-all duration-150 ease-linear hover:cursor-pointer"
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Form>
  )
}
