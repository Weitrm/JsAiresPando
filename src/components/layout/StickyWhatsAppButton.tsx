import { MessageCircle } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { whatsappNumber } from '../../data/siteContent'

const pageLabels: Record<string, string> = {
  '/': 'Inicio',
  '/aires-acondicionados': 'Aires Acondicionados',
  '/instalaciones-electricas': 'Instalaciones Electricas',
  '/infraestructura-industrial': 'Infraestructura Industrial',
  '/contacto': 'Contacto',
}

export function StickyWhatsAppButton() {
  const location = useLocation()
  const page = pageLabels[location.pathname] ?? location.pathname
  const message = encodeURIComponent(
    `Hola, te escribo desde la web para: ${page}. Mi nombre es: ______. Me gustaria recibir asesoramiento.`,
  )

  return (
    <a
      className="fixed right-3 z-[999] inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 px-3 py-2 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 md:right-4"
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
