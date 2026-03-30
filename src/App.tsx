import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { AirConditioningPage } from './pages/AirConditioningPage'
import { ContactPage } from './pages/ContactPage'
import { ElectricalPage } from './pages/ElectricalPage'
import { HomePage } from './pages/HomePage'
import { IndustrialPage } from './pages/IndustrialPage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/aires-acondicionados" element={<AirConditioningPage />} />
          <Route path="/instalaciones-electricas" element={<ElectricalPage />} />
          <Route path="/infraestructura-industrial" element={<IndustrialPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
