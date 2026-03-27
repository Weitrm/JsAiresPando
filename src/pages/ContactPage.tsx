import type { FormEvent } from 'react'
import { AtSign, MapPin, Phone, Send } from 'lucide-react'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import {
  addressText,
  emailAddress,
  phoneNumber,
  socialLinks,
  whatsappMessage,
  whatsappNumber,
} from '../data/siteContent'

export function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const phone = String(formData.get('phone') ?? '')
    const message = String(formData.get('message') ?? '')

    const subject = encodeURIComponent(`Consulta web de ${name}`)
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nTelefono: ${phone}\n\nMensaje:\n${message}`,
    )

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <section className="grid gap-4 rounded-3xl border border-slate-300 bg-linear-to-br from-emerald-100 to-sky-100 p-5 shadow-sm md:grid-cols-2">
        <div>
          <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
            Contacto
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Solicita presupuesto o reunion tecnica
          </h1>
          <p className="mt-3 text-base font-medium text-slate-700 md:text-lg">
            Escribinos por el canal que prefieras. Podemos ayudarte con climatizacion,
            electricidad e infraestructura industrial.
          </p>
          <p className="mt-3 rounded-lg border-l-4 border-emerald-600 bg-emerald-50 px-3 py-2 text-sm font-extrabold text-emerald-900">
            Respuesta rapida para coordinaciones tecnicas y presupuestos.
          </p>
          <div className="mt-4 grid gap-2 sm:flex sm:flex-wrap">
            <WhatsAppButton
              whatsappNumber={whatsappNumber}
              whatsappMessage={whatsappMessage}
              label="Hablar por WhatsApp"
              className="sm:w-auto"
            />
            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-900 transition hover:-translate-y-0.5"
            >
              Enviar email
            </a>
          </div>
        </div>
        <div className="min-h-60 overflow-hidden rounded-2xl border-2 border-dashed border-emerald-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26234.61784914406!2d-55.98730879729579!3d-34.72214519288491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a026992ab9fdaf%3A0xc45baec8811ddb27!2s15600%20Pando%2C%20Canelones%20Department!5e0!3m2!1sen!2suy!4v1774643636398!5m2!1sen!2suy"
            className="h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Pando, Canelones"
          />
        </div>
      </section>

      <section className="mt-4 rounded-3xl border border-slate-300 bg-slate-50 p-5 shadow-sm">
        <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-slate-900 md:text-3xl">
          <Send size={20} />
          Informacion de contacto
        </h2>
        <p className="mt-2 text-base font-medium text-slate-700">Abre el bloque que quieras consultar.</p>

        <div className="mt-4 grid gap-3">
          <details className="group overflow-hidden rounded-xl border border-emerald-300 bg-emerald-100/70" open>
            <summary className="cursor-pointer list-none bg-emerald-200/70 px-4 py-3 text-sm font-bold text-emerald-900">
              <div className="flex items-center justify-between">
                <span>Formulario de contacto</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="px-4 pb-4 pt-2">
              <p className="text-sm font-medium text-slate-800">
                Contanos el problema y te respondemos con una propuesta clara.
              </p>
              <form className="mt-3 grid gap-3" onSubmit={handleSubmit}>
                <label className="grid gap-1 text-sm font-semibold text-slate-700">
                  Nombre
                  <input
                    name="name"
                    type="text"
                    required
                    className="h-10 rounded-xl border border-emerald-200 bg-emerald-50 px-3 text-sm"
                  />
                </label>
                <label className="grid gap-1 text-sm font-semibold text-slate-700">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-10 rounded-xl border border-emerald-200 bg-emerald-50 px-3 text-sm"
                  />
                </label>
                <label className="grid gap-1 text-sm font-semibold text-slate-700">
                  Telefono
                  <input
                    name="phone"
                    type="tel"
                    className="h-10 rounded-xl border border-emerald-200 bg-emerald-50 px-3 text-sm"
                  />
                </label>
                <label className="grid gap-1 text-sm font-semibold text-slate-700">
                  Mensaje
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm"
                  />
                </label>
                <button
                  type="submit"
                  className="w-fit rounded-xl bg-linear-to-r from-orange-500 to-orange-400 px-4 py-3 text-sm font-bold text-slate-900 shadow-lg"
                >
                  Enviar consulta por mail
                </button>
              </form>
            </div>
          </details>

          <details className="group overflow-hidden rounded-xl border border-emerald-300 bg-emerald-100/70">
            <summary className="cursor-pointer list-none bg-emerald-200/70 px-4 py-3 text-sm font-bold text-emerald-900">
              <div className="flex items-center justify-between">
                <span>Canales directos</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="grid gap-3 px-4 pb-4 pt-2 md:grid-cols-3">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <h3 className="inline-flex items-center gap-1.5 text-base font-semibold text-emerald-900">
                  <Phone size={16} />
                  Telefono
                </h3>
                <p className="mt-2 text-slate-800">{phoneNumber}</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <h3 className="inline-flex items-center gap-1.5 text-base font-semibold text-emerald-900">
                  <AtSign size={16} />
                  Email
                </h3>
                <p className="mt-2 text-slate-800">{emailAddress}</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <h3 className="inline-flex items-center gap-1.5 text-base font-semibold text-emerald-900">
                  <MapPin size={16} />
                  Ubicacion
                </h3>
                <p className="mt-2 text-slate-800">{addressText}</p>
              </div>
            </div>
          </details>

          <details className="group overflow-hidden rounded-xl border border-emerald-300 bg-emerald-100/70">
            <summary className="cursor-pointer list-none bg-emerald-200/70 px-4 py-3 text-sm font-bold text-emerald-900">
              <div className="flex items-center justify-between">
                <span>Redes sociales</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="flex flex-wrap gap-2 px-4 pb-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-900"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </section>
    </>
  )
}
