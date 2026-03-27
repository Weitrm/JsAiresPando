import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { StickyWhatsAppButton } from './StickyWhatsAppButton'

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-slate-100 px-3 py-2 md:px-5 md:py-4 font-sans text-slate-700">
      <div className="mx-auto w-full max-w-7xl">
        <Header />
        <main className="pt-3 md:pt-4">
          <Outlet />
        </main>
        <Footer />
      </div>
      <StickyWhatsAppButton />
    </div>
  )
}

