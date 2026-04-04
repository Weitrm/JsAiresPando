import { MessageCircle } from 'lucide-react'
import { whatsappNumber } from '../../data/siteContent'



export function StickyWhatsAppButton() {
  const message = encodeURIComponent(
    `Hola, te escribo desde la web.`,
  )

  return (
    <a
      className="fixed right-3 z-999 inline-flex items-center gap-1.5 rounded-full bg-linear-to-br from-green-500 to-emerald-600 px-3 py-2 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 md:right-4"
      style={{ bottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <MessageCircle size={18} />
      WhatsApp
    </a>
  )
}
