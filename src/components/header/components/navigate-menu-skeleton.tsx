import { Skeleton } from '@/components/ui/skeleton'

export function NavigateMenuSkeleton() {
  return (
    <div className="flex w-full flex-col gap-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} className="h-12 w-full rounded-[6px]" />
      ))}
    </div>
  )
}
