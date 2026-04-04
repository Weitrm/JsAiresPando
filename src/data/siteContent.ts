export const businessName = 'Servicios Tecnicos Integrales Pando'
export const whatsappNumber = '59893365696'
export const whatsappMessage = encodeURIComponent(
  'Hola, quiero asesoramiento para un servicio tecnico integral.',
)
export const emailAddress = 'contacto@jsairespando.com'
export const phoneNumber = '093365696'
export const addressText = 'Pando, Canelones, Uruguay'

export type NavItem = {
  label: string
  path: string
}

export const navItems: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Aires Acondicionados', path: '/aires-acondicionados' },
  { label: 'Instalaciones Electricas', path: '/instalaciones-electricas' },
  { label: 'Infraestructura Industrial', path: '/infraestructura-industrial' },
  { label: 'Contacto', path: '/contacto' },
]

export type ServiceSummary = {
  title: string
  description: string
  link: string
}

export const homeServices: ServiceSummary[] = [
  {
    title: 'Aires Acondicionados',
    description: 'Instalacion, mantenimiento, reparaciones y limpieza tecnica de equipos.',
    link: '/aires-acondicionados',
  },
  {
    title: 'Instalaciones Electricas',
    description: 'Soluciones electricas residenciales y comerciales con criterios de seguridad.',
    link: '/instalaciones-electricas',
  },
  {
    title: 'Infraestructura Industrial',
    description: 'Planificacion y ejecucion de instalaciones para empresas en crecimiento.',
    link: '/infraestructura-industrial',
  },
]

export const companyHighlights = [
  'Atencion integral para hogares, comercios e industria.',
  'Respuesta rapida para mantenimiento y urgencias.',
  'Trabajo formal con enfoque en seguridad y continuidad operativa.',
]

export type FaqItem = {
  question: string
  answer: string
}

export const airFaq: FaqItem[] = [
  {
    question: 'Cada cuanto tiempo conviene hacer mantenimiento?',
    answer:
      'Para uso normal, recomendamos mantenimiento preventivo cada 6 meses. En oficinas o locales con uso intensivo, cada 3 o 4 meses.',
  },
  {
    question: 'Hacen servicio en equipos que no instalaron ustedes?',
    answer:
      'Si. Podemos diagnosticar, reparar y mantener equipos instalados por terceros, siempre que su estado tecnico permita una solucion segura.',
  },
  {
    question: 'El hidrolavado mejora el rendimiento del equipo?',
    answer:
      'Si, cuando se hace de forma tecnica y controlada. Mejora el flujo de aire, reduce consumo y ayuda a extender la vida util del equipo.',
  },
  {
    question: 'Cuanto demora una instalacion estandar?',
    answer:
      'En la mayoria de los casos entre 1 y 2 horas, segun distancia de caneria, altura y tipo de muro.',
  },
]

export type BtuPrice = {
  btu: string
  referencePrice: string
  details: string
}

export const airInstallPricing: BtuPrice[] = [
  {
    btu: '9.000 BTU',
    referencePrice: '$2800',
    details: 'Instalacion basica.',
  },
  {
    btu: '12.000 BTU',
    referencePrice: '$3400',
    details: 'Instalacion basica.',
  },
  {
    btu: '18.000 / 24.000 BTU',
    referencePrice: '$4500',
    details: 'Instalacion basica.',
  },
  {
    btu: '30.000 / 36.000 BTU',
    referencePrice: '$5300',
    details: 'Instalacion basica.',
  },
  {
    btu: 'Equipos mas grandes',
    referencePrice: 'Consultar',
    details: 'Se cotiza segun capacidad y complejidad.',
  },
]

export const relatedAirServices = [
  'Pre instalacion para obras nuevas o reformas',
  'Mantenimiento preventivo y correctivo',
  'Hidrolavado tecnico de unidades interior y exterior',
  'Carga y control de refrigerante',
  'Desinstalacion y reinstalacion de equipos',
  'Reparacion de fallas electricas y electronicas',
  'Reubicacion de equipos existentes',
]

export type ElectricalServiceCard = {
  title: string
  description: string
}

export const electricalServiceCards: ElectricalServiceCard[] = [
  {
    title: 'Acometidas',
    description:
      'Instalacion de circuitos electricos desde cero con materiales certificados y conexiones seguras.',
  },
  {
    title: 'Tableros y termicas',
    description:
      'Armado, reparacion o modernizacion de tableros electricos con disyuntor y proteccion termica.',
  },
  {
    title: 'Deteccion de fugas a tierra',
    description:
      'Diagnostico y solucion de perdidas electricas peligrosas que pueden afectar la seguridad de tu hogar o empresa.',
  },
  {
    title: 'Instalacion de luminarias',
    description:
      'Montaje y conexion de luces interiores o exteriores con estetica, seguridad y eficiencia energetica.',
  },
  {
    title: 'Instalacion de aires',
    description:
      'Conexion electrica profesional y segura para equipos de aire acondicionado split y ventana.',
  },
]

export const airBasicInstallItems = [
  'Colocacion de unidad interior y exterior con fijaciones seguras.',
  'Conexion de canerias, desagote y cableado entre unidades.',
  'Vacio del circuito y prueba de funcionamiento.',
  'Verificacion de consumo electrico y rendimiento inicial.',
]

export const airUninstallPricing = [
  {
    item: '9.000 / 12.000 BTU',
    price: '$1500',
  },
  {
    item: '18.000 / 24.000 BTU',
    price: '$2500',
  },
  {
    item: 'Equipos mas grandes',
    price: 'Consultar',
  },
]

export const airBracketPricing = [
  {
    item: '9.000 y 12.000 BTU',
    price: '$650',
  },
  {
    item: '18.000 y 24.000 BTU',
    price: '$850',
  },
]

export type HydroWashPrice = {
  btu: string
  simple: string
  complete: string
}

export const airHydroWashPricing: HydroWashPrice[] = [
  {
    btu: '9.000 a 12.000 BTU',
    simple: '$2800',
    complete: '$4200',
  },
  {
    btu: '18.000 a 24.000 BTU',
    simple: '$3500',
    complete: '$5200',
  },
]

export type IndustrialBlock = {
  title: string
  description: string
  points: string[]
}

export const industrialBlocks: IndustrialBlock[] = [
  {
    title: 'Diseño y Ejecucion de Obras Electricas',
    description:
      'Acompanamos ampliaciones y nuevas plantas con una ejecucion ordenada para evitar demoras operativas.',
    points: [
      'Planificacion de canalizaciones y tableros de potencia',
      'Tendido y etiquetado de lineas electricas',
      'Puesta en marcha por etapas',
    ],
  },
  {
    title: 'Continuidad Operativa',
    description:
      'Mantenimiento y soporte para minimizar paradas no programadas en procesos productivos.',
    points: [
      'Mantenimiento preventivo mensual o trimestral',
      'Diagnostico de sobrecargas y puntos criticos',
      'Protocolos de respuesta en emergencias tecnicas',
    ],
  },
  {
    title: 'Documentacion y Escalabilidad',
    description:
      'Dejamos trazabilidad para que la infraestructura pueda crecer junto con la empresa.',
    points: [
      'Inventario de circuitos y tableros',
      'Recomendaciones de mejora por fases',
      'Informe tecnico post-obra para el cliente',
    ],
  },
]

export const socialLinks: Array<{ label: string; href: string }> = [
  { label: '@aires_pando', href: 'https://instagram.com/aires_pando' },
  { label: 'Facebook', href: 'https://facebook.com/' },
]

