import { Calculator, Wrench } from 'lucide-react'
import { BtuCalculatorDialog } from '../components/air/BtuCalculatorDialog'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import { publicAsset } from '../lib/publicAsset'
import {
  airBasicInstallItems,
  airBracketPricing,
  airFaq,
  airInstallPricing,
  airUninstallPricing,
  relatedAirServices,
  whatsappMessage,
  whatsappNumber,
} from '../data/siteContent'

export function AirConditioningPage() {
  return (
    <>
      <section className="grid gap-4 rounded-3xl border border-slate-300 bg-linear-to-br from-sky-100 to-blue-100 p-5 shadow-sm md:grid-cols-2">
        <div>
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-800">
            Aires Acondicionados
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Instalación, Mantenimiento, Reparación, Hidrolavado, Traslado.
          </h1>
          <p className="mt-3 text-base font-medium text-slate-700 md:text-lg">
            Trabajamos con equipos residenciales y comerciales, priorizando rendimiento,
            durabilidad y seguridad electrica.
          </p>
          <div className="mt-4 grid gap-2 sm:flex sm:justify-center sm:gap-3">
            <WhatsAppButton
              whatsappNumber={whatsappNumber}
              whatsappMessage={whatsappMessage}
              label="Pedir visita tecnica"
              className="sm:w-auto"
            />
            <BtuCalculatorDialog />
          </div>
        </div>
        <div className="grid min-h-60 overflow-hidden rounded-2xl border-2 border-dashed border-blue-200">
          <img
            src={publicAsset('aire-arreglo.jpg')}
            alt="Aire acondicionado en servicio tecnico"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-4 rounded-3xl border border-slate-300 bg-slate-50 p-5 shadow-sm">
        <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-slate-900 md:text-3xl">
          <Wrench size={20} />
          Informacion de servicios
        </h2>
        <p className="mt-2 text-base font-medium text-slate-700">Abre el bloque que quieras consultar.</p>

        <div className="mt-4 grid gap-3">
          <details className="group overflow-hidden rounded-xl border border-sky-300 bg-sky-100/70" open>
            <summary className="cursor-pointer list-none bg-sky-200/70 px-4 py-3 text-sm font-bold text-blue-900">
              <div className="flex items-center justify-between">
                <span>Instalacion basica: que incluye</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="grid gap-3 px-4 pb-4 pt-2 text-slate-800 md:grid-cols-2">
              <ul className="list-disc space-y-1 pl-5 text-sky-950">
                {airBasicInstallItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="grid min-h-56 overflow-hidden rounded-xl border-2 border-dashed border-blue-300 bg-white p-2">
                <img
                  src={publicAsset('instalacionbasica.png')}
                  alt="Instalación básica de aire acondicionado"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </details>

          <details className="group overflow-hidden rounded-xl border border-sky-300 bg-sky-100/70">
            <summary className="cursor-pointer list-none bg-sky-200/70 px-4 py-3 text-sm font-bold text-blue-900">
              <div className="flex items-center justify-between">
                <span>Costos de instalacion por BTU</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="overflow-x-auto px-4 pb-4 pt-2 text-slate-800">
              <table className="w-full min-w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-sky-200 px-3 py-2 text-left text-blue-900">Capacidad</th>
                    <th className="border border-slate-300 bg-sky-200 px-3 py-2 text-left text-blue-900">Precio referencia</th>
                    <th className="border border-slate-300 bg-sky-200 px-3 py-2 text-left text-blue-900">Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  {airInstallPricing.map((item) => (
                    <tr key={item.btu}>
                      <td className="border border-slate-300 px-3 py-2 align-top">{item.btu}</td>
                      <td className="border border-slate-300 px-3 py-2 align-top">{item.referencePrice}</td>
                      <td className="border border-slate-300 px-3 py-2 align-top">{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>

          <details className="group overflow-hidden rounded-xl border border-sky-300 bg-sky-100/70">
            <summary className="cursor-pointer list-none bg-sky-200/70 px-4 py-3 text-sm font-bold text-blue-900">
              <div className="flex items-center justify-between">
                <span>Precios adicionales (mensulas y desinstalacion)</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="grid gap-4 px-4 pb-4 pt-2 text-slate-800">
              <div>
                <p className="text-sm font-bold text-blue-900">Desinstalacion</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  {airUninstallPricing.map((extra) => (
                    <article key={extra.item} className="rounded-xl border border-sky-200 bg-sky-50 p-3">
                      <p className="text-sm font-semibold text-sky-900">{extra.item}</p>
                      <p className="mt-1 text-lg font-bold text-slate-900">{extra.price}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-blue-900">Precio de mensulas</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {airBracketPricing.map((extra) => (
                    <article key={extra.item} className="rounded-xl border border-sky-200 bg-sky-50 p-3">
                      <p className="text-sm font-semibold text-sky-900">{extra.item}</p>
                      <p className="mt-1 text-lg font-bold text-slate-900">{extra.price}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </details>

          <details className="group overflow-hidden rounded-xl border border-sky-300 bg-sky-100/70">
            <summary className="cursor-pointer list-none bg-sky-200/70 px-4 py-3 text-sm font-bold text-blue-900">
              <div className="flex items-center justify-between">
                <span>Otros servicios disponibles</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <ul className="columns-1 space-y-1 px-4 pb-4 pl-9 pt-2 text-sky-950 sm:columns-2">
              {relatedAirServices.map((service) => (
                <li key={service} className="list-disc break-inside-avoid">
                  {service}
                </li>
              ))}
            </ul>
          </details>

          <details className="group overflow-hidden rounded-xl border border-sky-300 bg-sky-100/70">
            <summary className="cursor-pointer list-none bg-sky-200/70 px-4 py-3 text-sm font-bold text-blue-900">
              <div className="flex items-center justify-between">
                <span>Preguntas frecuentes</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="grid gap-2 px-4 pb-4 pt-2 text-slate-800">
              {airFaq.map((faq) => (
                <details key={faq.question} className="group/item overflow-hidden rounded-lg border border-sky-200 bg-sky-50">
                  <summary className="cursor-pointer list-none px-3 py-2 text-sm font-semibold text-sky-900">
                    <div className="flex items-center justify-between">
                      <span>{faq.question}</span>
                      <span className="group-open/item:hidden">+</span>
                      <span className="hidden group-open/item:inline">-</span>
                    </div>
                  </summary>
                  <p className="px-3 pb-3 text-sm text-slate-800">{faq.answer}</p>
                </details>
              ))}
            </div>
          </details>
        </div>
      </section>

      <section className="mt-4 rounded-3xl border border-slate-300 bg-slate-50 p-5 shadow-sm">
        <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-slate-900 md:text-3xl">
          <Calculator size={20} />
          Calculadora BTU integrada
        </h2>
        <p className="mt-2 text-slate-700">
          Usa la calculadora para estimar capacidad y luego confirmar el modelo con visita tecnica.
        </p>
        <div className="mt-4 flex justify-center">
          <BtuCalculatorDialog />
        </div>
        <p className="mt-3 rounded-lg border-l-4 border-blue-700 bg-blue-50 px-3 py-2 text-sm font-bold text-slate-800">
          Recomendacion destacada: nunca elegir BTU solo por precio.
        </p>
      </section>
    </>
  )
}
