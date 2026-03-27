import { cn } from '@/lib/utils'

type WhatsAppButtonProps = {
  whatsappNumber: string
  whatsappMessage: string
  label: string
  className?: string
}

export function WhatsAppButton({ whatsappNumber, whatsappMessage, label, className }: WhatsAppButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-orange-400 px-4 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:-translate-y-0.5',
        className,
      )}
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noreferrer"
    >
      <img src="/whatsapp.svg" alt="" aria-hidden="true" className="h-4 w-4" />
      {label}
    </a>
  )
}

