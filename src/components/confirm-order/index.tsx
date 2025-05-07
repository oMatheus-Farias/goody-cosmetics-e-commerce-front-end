import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '../ui/drawer'
import { ConfirmOrderForm } from './components/confirm-order-form'

type TProps = {
  isOpen: boolean
  onOpenChange: (value: boolean) => void
}

export function ConfirmOrder({ isOpen, onOpenChange }: TProps) {
  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[60%]">
        <DrawerHeader>
          <DrawerTitle className="text-center font-normal uppercase">
            Falta pouco!
          </DrawerTitle>
          <DrawerDescription className="text-center font-light">
            Para finalizar seu pedido, informe seu nome. Você será redirecionado
            para o WhatsApp da loja.
          </DrawerDescription>
        </DrawerHeader>
        <div className="mx-auto mt-12 h-full w-full max-w-[600px] px-4 pb-4">
          <ConfirmOrderForm onOpenChange={onOpenChange} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
