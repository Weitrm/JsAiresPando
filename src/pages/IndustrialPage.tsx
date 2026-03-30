import { Factory, FileText } from 'lucide-react'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import { industrialBlocks, whatsappMessage, whatsappNumber } from '../data/siteContent'
import { publicAsset } from '../lib/publicAsset'

export function IndustrialPage() {
  return (
    <>
      <section className="grid gap-4 rounded-3xl border border-slate-300 bg-linear-to-br from-slate-200 to-slate-100 p-5 shadow-sm md:grid-cols-2">
        <div>
          <p className="inline-flex rounded-full border border-slate-300 bg-slate-200 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700">
            Infraestructura Industrial
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Servicios para empresas que estan creciendo y necesitan escalar su operacion
          </h1>
          <p className="mt-3 text-base font-medium text-slate-700 md:text-lg">
            Esta unidad esta pensada para proyectos de mayor impacto: ampliaciones, instalaciones
            nuevas y mantenimiento de infraestructura critica.
          </p>
          <p className="mt-3 rounded-lg border-l-4 border-slate-600 bg-slate-50 px-3 py-2 text-sm font-extrabold text-slate-900">
            Acompañamos proyectos industriales con planificacion, ejecucion y continuidad operativa.
          </p>
          <div className="mt-4 grid gap-2 sm:flex sm:flex-wrap">
            <WhatsAppButton
              whatsappNumber={whatsappNumber}
              whatsappMessage={whatsappMessage}
              label="Coordinar reunion tecnica"
              className="sm:w-auto"
            />
          </div>
        </div>
        <div className="min-h-60 overflow-hidden rounded-2xl border-2 border-dashed border-slate-300">
          <img
            src={publicAsset('industrial.jpg')}
            alt="Imagen industrial"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-4 rounded-3xl border border-slate-300 bg-slate-50 p-5 shadow-sm">
        <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-slate-900 md:text-3xl">
          <Factory size={20} />
          Informacion industrial
        </h2>
        <p className="mt-2 text-base font-medium text-slate-700">Abre el bloque que quieras consultar.</p>

        <div className="mt-4 grid gap-3">
          <details className="group overflow-hidden rounded-xl border border-slate-300 bg-slate-200/70" open>
            <summary className="cursor-pointer list-none bg-slate-300/70 px-4 py-3 text-sm font-bold text-slate-900">
              <div className="flex items-center justify-between">
                <span>Que problema resuelve para las empresas</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="px-4 pb-4 pt-2">
              <p className="text-slate-800">
                Cuando una empresa crece, la infraestructura electrica suele quedar chica para la
                nueva demanda. Este servicio ordena ese crecimiento para evitar riesgos, cortes y
                paradas de produccion.
              </p>
              <p className="mt-3 rounded-lg border-l-4 border-slate-700 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-900">
                Objetivo principal: escalar sin detener la operacion.
              </p>
            </div>
          </details>

          <details className="group overflow-hidden rounded-xl border border-slate-300 bg-slate-200/70">
            <summary className="cursor-pointer list-none bg-slate-300/70 px-4 py-3 text-sm font-bold text-slate-900">
              <div className="flex items-center justify-between">
                <span>Lineas de trabajo</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="grid gap-3 px-4 pb-4 pt-2 md:grid-cols-3">
              {industrialBlocks.map((block) => (
                <article key={block.title} className="rounded-2xl border border-slate-300 bg-slate-100 p-4">
                  <h3 className="text-base font-semibold text-slate-900">{block.title}</h3>
                  <p className="mt-2 text-slate-800">{block.description}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-800">
                    {block.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </details>

          <details className="group overflow-hidden rounded-xl border border-slate-300 bg-slate-200/70">
            <summary className="cursor-pointer list-none bg-slate-300/70 px-4 py-3 text-sm font-bold text-slate-900">
              <div className="flex items-center justify-between">
                <span>Caso de expansion reciente</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="px-4 pb-4 pt-2">
              <p className="text-slate-800">
                Se habilito una nueva obra para renovar por completo la instalacion electrica de
                una empresa cliente. Este tipo de proyecto confirma la evolucion del servicio hacia
                infraestructura de mayor escala.
              </p>
              <p className="mt-2 inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                <FileText size={16} />
                Proyecto en desarrollo con planificacion por etapas.
              </p>
            </div>
          </details>

          <details className="group overflow-hidden rounded-xl border border-slate-300 bg-slate-200/70">
            <summary className="cursor-pointer list-none bg-slate-300/70 px-4 py-3 text-sm font-bold text-slate-900">
              <div className="flex items-center justify-between">
                <span>Por que elegir este servicio</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">-</span>
              </div>
            </summary>
            <div className="px-4 pb-4 pt-2">
              <p className="rounded-lg border-l-4 border-slate-700 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-900">
                Infraestructura industrial pensada para crecimiento real, seguridad y continuidad.
              </p>
              <p className="mt-2 text-slate-800">
                Integracion tecnica, orden documental y capacidad de respuesta para empresas que no
                pueden detener su operacion.
              </p>
            </div>
          </details>
        </div>
      </section>
    </>
  )
}

