import { AirVent, Cable, Lightbulb, ShieldAlert, Wrench, Zap } from 'lucide-react'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import { electricalServiceCards, whatsappMessage, whatsappNumber } from '../data/siteContent'
import { publicAsset } from '../lib/publicAsset'

const serviceIcons = [Cable, Wrench, ShieldAlert, Lightbulb, AirVent]

export function ElectricalPage() {
  return (
    <>
      <section className="grid gap-4 rounded-3xl border border-slate-300 bg-linear-to-br from-amber-100 to-orange-100 p-5 shadow-sm md:grid-cols-2">
        <div>
          <p className="inline-flex rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-800">
            Instalaciones Electricas
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Servicios electricos para hogares, comercios y nuevas obras
          </h1>
          <p className="mt-3 text-base font-medium text-slate-700 md:text-lg">
            Ejecutamos instalaciones nuevas, mejoras y mantenimiento con foco en seguridad,
            normativas y funcionamiento estable.
          </p>
          <p className="mt-3 rounded-lg border-l-4 border-amber-600 bg-amber-50 px-3 py-2 text-sm font-extrabold text-amber-900">
            Contamos con firma y autorizacion de UTE.
          </p>
          <div className="mt-4 grid gap-2 sm:flex sm:flex-wrap">
            <WhatsAppButton
              whatsappNumber={whatsappNumber}
              whatsappMessage={whatsappMessage}
              label="Solicitar diagnostico"
              className="sm:w-auto"
            />
          </div>
        </div>
        <div className="min-h-60 overflow-hidden rounded-2xl border-2 border-dashed border-amber-300">
          <img
            src={publicAsset('electricidad.png')}
            alt="Imagen de tecnico con tablero electrico"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-4 rounded-3xl border border-slate-300 bg-slate-50 p-5 shadow-sm">
        <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-slate-900 md:text-3xl">
          <Lightbulb size={20} />
          Informacion de servicios
        </h2>
        <p className="mt-2 text-base font-medium text-slate-700">Abre el bloque que quieras consultar.</p>

        <div className="mt-4 grid gap-3">
          <details className="group overflow-hidden rounded-xl border border-amber-300 bg-amber-100/70" open>
            <summary className="cursor-pointer list-none bg-amber-200/70 px-4 py-3 text-sm font-bold text-amber-900">
              <div className="flex items-center justify-between">
                <span>Servicios electricos</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="grid gap-3 px-4 pb-4 pt-2 text-slate-800 md:grid-cols-2">
              {electricalServiceCards.map((service, index) => {
                const Icon = serviceIcons[index]
                return (
                  <article key={service.title} className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <h3 className="inline-flex items-center gap-1.5 text-base font-semibold text-amber-900">
                      {Icon ? <Icon size={16} /> : null}
                      {service.title}
                    </h3>
                    <p className="mt-2 text-slate-800">{service.description}</p>
                  </article>
                )
              })}
            </div>
          </details>

          <details className="group overflow-hidden rounded-xl border border-amber-300 bg-amber-100/70">
            <summary className="cursor-pointer list-none bg-amber-200/70 px-4 py-3 text-sm font-bold text-amber-900">
              <div className="flex items-center justify-between">
                <span>Como trabajamos</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="grid gap-3 px-4 pb-4 pt-2 md:grid-cols-3">
              <article className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <h3 className="inline-flex items-center gap-1.5 text-base font-semibold text-amber-900">
                  <Zap size={16} />
                  1. Relevamiento
                </h3>
                <p className="mt-2 text-slate-800">Visitamos el sitio para validar necesidad tecnica y riesgos.</p>
              </article>
              <article className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <h3 className="text-base font-semibold text-amber-900">2. Propuesta</h3>
                <p className="mt-2 text-slate-800">Definimos alcance, materiales, tiempos y costo.</p>
              </article>
              <article className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <h3 className="text-base font-semibold text-amber-900">3. Ejecucion</h3>
                <p className="mt-2 text-slate-800">Implementamos con orden, protecciones y pruebas finales.</p>
              </article>
            </div>
          </details>

          <details className="group overflow-hidden rounded-xl border border-amber-300 bg-amber-100/70">
            <summary className="cursor-pointer list-none bg-amber-200/70 px-4 py-3 text-sm font-bold text-amber-900">
              <div className="flex items-center justify-between">
                <span>Respaldo tecnico y habilitaciones</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="px-4 pb-4 pt-2">
              <p className="rounded-lg border-l-4 border-amber-700 bg-amber-50 px-3 py-2 text-sm font-bold text-amber-900">
                Contamos con firma y autorizacion de UTE.
              </p>
              <p className="mt-2 text-slate-800">
                Punto clave: toda mejora electrica parte de un buen relevamiento, materiales
                certificados y ejecucion segura.
              </p>
            </div>
          </details>
        </div>
      </section>
    </>
  )
}

