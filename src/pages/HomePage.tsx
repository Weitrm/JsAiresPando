import { Building2, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import {
  addressText,
  companyHighlights,
  homeServices,
  phoneNumber,
  whatsappMessage,
  whatsappNumber,
} from '../data/siteContent'

export function HomePage() {
  return (
    <>
      <section className="grid gap-4 rounded-3xl border border-slate-300 bg-gradient-to-br from-blue-100 to-orange-100 p-5 shadow-sm md:grid-cols-2">
        <div>
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-800">
            Servicios Tecnicos Integrales
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Crecimos para cubrir electricidad, climatizacion e infraestructura industrial
          </h1>
          <p className="mt-3 max-w-3xl text-base font-medium text-slate-700 md:text-lg">
            Comenzamos con aire acondicionado y hoy resolvemos proyectos tecnicos de mayor escala
            para hogares, comercios y empresas.
          </p>
          <div className="mt-4 grid gap-2 sm:flex sm:flex-wrap">
            <WhatsAppButton
              whatsappNumber={whatsappNumber}
              whatsappMessage={whatsappMessage}
              label="Contactar por WhatsApp"
              className="sm:w-auto"
            />
            <a
              href="tel:093365696"
              className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-slate-100 px-4 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5"
            >
              Llamar ahora
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border-2 border-dashed border-blue-200 text-slate-600">
          <img className="block h-full w-full object-cover" src="/mainImg.jpg" alt="Foto del equipo en obra" />
        </div>
      </section>

      <section className="mt-4 rounded-3xl border border-slate-300 bg-slate-50 p-5 shadow-sm">
        <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-slate-900 md:text-3xl">
          <ShieldCheck size={20} />
          Sobre la empresa
        </h2>
        <p className="mt-2 text-base font-medium text-slate-700">
          Somos un equipo tecnico en expansion con foco en calidad de ejecucion, orden en obra y
          respuesta rapida. Cada servicio se planifica para que el cliente tenga resultados
          confiables y sostenibles.
        </p>
        <p className="mt-3 rounded-lg border-l-4 border-blue-700 bg-blue-50 px-3 py-2 text-sm font-bold text-slate-800">
          Enfoque principal: resolver rapido, seguro y con trazabilidad.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          {companyHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="mt-4 rounded-3xl border border-slate-300 bg-slate-50 p-5 shadow-sm">
        <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-slate-900 md:text-3xl">
          <Building2 size={20} />
          Servicios principales
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {homeServices.map((service) => (
            <article key={service.title} className="rounded-2xl border border-slate-300 bg-slate-100 p-4">
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-slate-700">{service.description}</p>
              <Link to={service.link} className="mt-3 inline-flex text-sm font-bold text-blue-800 hover:text-blue-700">
                Ver detalle
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-4 rounded-3xl border border-slate-300 bg-slate-50 p-5 shadow-sm">
        <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-slate-900 md:text-3xl">
          <Phone size={20} />
          Ubicacion y contacto rapido
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-300 bg-slate-100 p-4">
            <h3 className="inline-flex items-center gap-1.5 text-base font-semibold text-slate-900">
              <MapPin size={16} />
              Ubicacion
            </h3>
            <p className="mt-2 text-slate-700">{addressText}</p>
          </div>
          <div className="rounded-2xl border border-slate-300 bg-slate-100 p-4">
            <h3 className="inline-flex items-center gap-1.5 text-base font-semibold text-slate-900">
              <Phone size={16} />
              Telefono
            </h3>
            <p className="mt-2 text-slate-700">{phoneNumber}</p>
          </div>
          <div className="rounded-2xl border border-slate-300 bg-slate-100 p-4">
            <h3 className="text-base font-semibold text-slate-900">Atencion</h3>
            <p className="mt-2 text-slate-700">Lunes a Sabado, coordinacion por mensaje o llamada.</p>
          </div>
        </div>
      </section>
    </>
  )
}


