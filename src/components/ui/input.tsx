import { Input as InputPrimitive } from '@base-ui/react/input'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export function Input({ className, ...props }: ComponentProps<'input'>) {
  return (
    <InputPrimitive
      className={cn(
        'h-9 w-full rounded-lg border border-slate-300 bg-slate-100 px-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200',
        className,
      )}
      {...props}
    />
  )
}

