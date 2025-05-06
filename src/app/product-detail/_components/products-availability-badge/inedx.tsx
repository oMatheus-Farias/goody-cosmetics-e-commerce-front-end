import { CircleAlert, CircleCheck } from 'lucide-react'

type TProps = {
  available: boolean
}

export function ProductsAvailabilityBadge({ available }: TProps) {
  return (
    <>
      {available ? (
        <span className="flex w-fit items-center gap-1 rounded-full bg-emerald-100 px-4 text-[10px] font-semibold text-emerald-500 uppercase">
          <CircleCheck className="w-3" />
          Disponível
        </span>
      ) : (
        <span className="flex w-fit items-center gap-1 rounded-full bg-rose-100 px-4 text-[10px] font-semibold text-rose-500 uppercase">
          <CircleAlert className="w-3" />
          Indisponível
        </span>
      )}
    </>
  )
}
