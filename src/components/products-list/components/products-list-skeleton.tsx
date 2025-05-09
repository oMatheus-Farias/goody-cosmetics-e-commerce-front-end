import { Skeleton } from '@/components/ui/skeleton'

export function ProductsListSkeleton() {
  return (
    <div className="mx-auto flex flex-col gap-1.5">
      <Skeleton className="h-64 w-44 rounded-[10px] sm:w-48 md:w-56 lg:w-52" />
      <Skeleton className="h-4 w-36 rounded-[10px] sm:w-40" />
      <Skeleton className="h-4 w-28 rounded-[10px] sm:w-32" />
    </div>
  )
}
