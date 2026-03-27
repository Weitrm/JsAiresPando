import { useMemo, useState, type ChangeEvent } from 'react'
import { Calculator, Snowflake } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type EstimatedRange = {
  recommended: number
  suggestedModel: string
  volume: number
}

function calculateBtu(width: number, height: number, length: number, sunExposure: 'baja' | 'media' | 'alta') {
  const volume = width * height * length
  const sunMultiplier = sunExposure === 'alta' ? 1.2 : sunExposure === 'media' ? 1.1 : 1
  const recommended = Math.round(volume * 210 * sunMultiplier)

  if (recommended <= 9500) {
    return { recommended, suggestedModel: '9.000 BTU', volume }
  }
  if (recommended <= 12500) {
    return { recommended, suggestedModel: '12.000 BTU', volume }
  }
  if (recommended <= 18500) {
    return { recommended, suggestedModel: '18.000 BTU', volume }
  }
  return { recommended, suggestedModel: '24.000 BTU o superior', volume }
}

export function BtuCalculatorDialog() {
  const [width, setWidth] = useState('4')
  const [height, setHeight] = useState('2.6')
  const [length, setLength] = useState('5')
  const [sunExposure, setSunExposure] = useState<'baja' | 'media' | 'alta'>('media')

  const result: EstimatedRange | null = useMemo(() => {
    const widthNumber = Number(width)
    const heightNumber = Number(height)
    const lengthNumber = Number(length)

    if (Number.isNaN(widthNumber) || Number.isNaN(heightNumber) || Number.isNaN(lengthNumber)) {
      return null
    }
    if (widthNumber <= 0 || heightNumber <= 0 || lengthNumber <= 0) {
      return null
    }

    return calculateBtu(widthNumber, heightNumber, lengthNumber, sunExposure)
  }, [width, height, length, sunExposure])

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" className="mt-4 w-full sm:mt-0 sm:w-auto" />}>
        <Calculator size={16} />
        Calcular BTU recomendado
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Calculadora de BTU</DialogTitle>
          <DialogDescription>
            Ingresa ancho, alto y largo de la habitacion. Esta estimacion orienta la compra y se
            confirma en visita tecnica.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="width">Ancho (m)</Label>
            <Input
              id="width"
              inputMode="decimal"
              value={width}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setWidth(event.target.value)}
            />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="height">Alto (m)</Label>
            <Input
              id="height"
              inputMode="decimal"
              value={height}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setHeight(event.target.value)}
            />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="length">Largo (m)</Label>
            <Input
              id="length"
              inputMode="decimal"
              value={length}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setLength(event.target.value)}
            />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="sun">Exposicion solar</Label>
            <select
              id="sun"
              className="h-9 w-full rounded-lg border border-slate-300 bg-slate-100 px-3 text-sm text-slate-700"
              value={sunExposure}
              onChange={(event) => setSunExposure(event.target.value as 'baja' | 'media' | 'alta')}
            >
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-slate-300 bg-slate-100 p-3">
          {result ? (
            <>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-600">Resultado estimado</p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-lg font-bold text-slate-900">
                <Snowflake size={16} />
                {result.recommended.toLocaleString('es-UY')} BTU
              </p>
              <p className="mt-1 text-sm text-slate-700">Volumen estimado: {result.volume.toFixed(1)} m³</p>
              <p className="mt-1 text-sm text-slate-700">Equipo sugerido: {result.suggestedModel}</p>
            </>
          ) : (
            <p className="text-sm text-slate-700">Ingresa valores validos para obtener la recomendacion.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

