import { Mail, MapPin } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { addressText, emailAddress, navItems, socialLinks } from '../../data/siteContent'

const developerEmail = 'rodrigomesaw@gmail.com'

export function Footer() {
  return (
    <footer className="mt-4 rounded-2xl border border-slate-300 bg-slate-100 p-4 shadow-sm">
      <div className="hidden grid-cols-3 gap-4 md:grid">
        <section>
          <h3 className="text-base font-semibold text-slate-900">Accesos rapidos</h3>
          <div className="mt-2 grid gap-1.5 text-sm font-semibold text-slate-700">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className="hover:text-blue-700">
                {item.label}
              </NavLink>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-base font-semibold text-slate-900">Redes</h3>
          <div className="mt-2 grid gap-1.5 text-sm font-semibold text-slate-700">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="hover:text-blue-700">
                {social.label}
              </a>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-base font-semibold text-slate-900">Contacto</h3>
          <div className="mt-2 grid gap-1.5 text-sm text-slate-700">
            <p className="inline-flex items-center gap-1.5">
              <MapPin size={15} /> {addressText}
            </p>
            <p className="inline-flex items-center gap-1.5">
              <Mail size={15} />
              <a href={`mailto:${emailAddress}`} className="font-semibold hover:text-blue-700">
                {emailAddress}
              </a>
            </p>
          </div>
        </section>
      </div>

      <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm md:hidden">
        <p className="text-sm font-semibold text-slate-800">Resumen</p>
        <p className="mt-1 text-slate-600">{addressText}</p>
        <p className="mt-1">
          <a href={`mailto:${emailAddress}`} className="font-semibold text-slate-800">
            {emailAddress}
          </a>
        </p>
        <p className="mt-1 text-slate-600">Atencion por WhatsApp, llamada o correo.</p>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-slate-300 pt-3 text-xs text-slate-600 md:text-sm">
        <p>{`© ${new Date().getFullYear()} Aire Acondicionado Pando. Todos los derechos reservados.`}</p>
        <p>
          Desarrollo web:{' '}
          <a href={`mailto:${developerEmail}`} className="font-semibold text-slate-700 hover:text-blue-700">
            {developerEmail}
          </a>
        </p>
      </div>
    </footer>
  )
}

