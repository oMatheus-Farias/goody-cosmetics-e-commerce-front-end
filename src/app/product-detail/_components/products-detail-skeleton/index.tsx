import { Skeleton } from '@/components/ui/skeleton'

export function ProductDetailSkeleton() {
  return (
    <div className="flex w-full flex-col gap-2 lg:flex-row">
      <Skeleton className="h-80 w-full rounded-[10px] lg:w-2/3" />
      <div className="flex flex-col gap-4 lg:w-1/3">
        <Skeleton className="h-6 w-56 rounded-[10px]" />
        <Skeleton className="h-4 w-28 rounded-[10px]" />
      </div>
    </div>
  )
}
