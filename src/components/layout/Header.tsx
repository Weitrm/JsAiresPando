import { useEffect, useState } from 'react'
import { Factory, House, Mail, Snowflake, Zap } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navItems } from '../../data/siteContent'
import { cn } from '@/lib/utils'

const navIcons = {
  Inicio: House,
  'Aires Acondicionados': Snowflake,
  'Instalaciones Electricas': Zap,
  'Infraestructura Industrial': Factory,
  Contacto: Mail,
} as const

const baseLinkClass =
  'inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-semibold text-slate-800 transition hover:bg-blue-100'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 900) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('resize', closeOnResize)
    return () => {
      window.removeEventListener('resize', closeOnResize)
    }
  }, [])

  return (
    <header className="sticky top-1 z-20 rounded-2xl border border-slate-300 bg-slate-100/90 shadow-md backdrop-blur-sm">
      <div className="flex items-center justify-between gap-2 px-2 py-1.5 md:px-3 md:py-2">
        <NavLink
          to="/"
          className="inline-flex p-1"
          onClick={() => setMobileOpen(false)}
        >
          <img
            className="block h-auto w-25.5 rounded md:w-38.5"
            src="/logo/logonegro_noback.png"
            alt="Logo de la empresa"
          />
        </NavLink>

        <button
          type="button"
          className="inline-grid h-8 w-8 place-items-center rounded-md border border-slate-300 bg-slate-50 md:hidden"
          onClick={() => setMobileOpen((current) => !current)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Abrir menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-4 bg-slate-700" />
            <span className="block h-0.5 w-4 bg-slate-700" />
            <span className="block h-0.5 w-4 bg-slate-700" />
          </div>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {navItems.map((item) => {
            const Icon = navIcons[item.label as keyof typeof navIcons]
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  cn(
                    baseLinkClass,
                    isActive && 'bg-blue-100 text-slate-900',
                  )
                }
              >
                {Icon ? <Icon size={14} /> : null}
                {item.label}
              </NavLink>
            )
          })}
        </nav>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Principal mobile"
        className={cn('grid gap-1 px-2 pb-2 md:hidden', !mobileOpen && 'hidden')}
      >
        {navItems.map((item) => {
          const Icon = navIcons[item.label as keyof typeof navIcons]
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                cn(
                  baseLinkClass,
                  'px-2 py-1.5',
                  isActive && 'bg-blue-100 text-slate-900',
                )
              }
            >
              {Icon ? <Icon size={14} /> : null}
              {item.label}
            </NavLink>
          )
        })}
      </nav>
    </header>
  )
}

