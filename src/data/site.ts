export const site = {
  nombre: 'Cofradía del Santo Sepulcro',
  nombreLargo: 'Cofradía del Santo Sepulcro y Jesús Cautivo',
  localidad: 'Monóvar',
  provincia: 'Alicante',
  descripcion:
    'Cofradía del Santo Sepulcro y Jesús Cautivo de Monóvar. Fundada en 1940 y establecida oficialmente el 2 de febrero de 1941 en la iglesia Parroquial de San Juan Bautista.',
  email: 'santosepulcromonovar@gmail.com',
  telegrama: '',
  redes: {
    facebook: '',
    instagram: '',
    youtube: 'https://www.youtube.com/results?search_query=santo+sepulcro+monovar',
  },
  youtube: {
    videoDestacado: 'vsFOsKKpvIs',
    titulo: 'Última salida de la Cofradía',
    descripcion:
      'Revive los momentos más emotivos de la última salida y entrada de nuestros tronos por las calles de Monóvar.',
    canal: 'https://www.youtube.com/results?search_query=santo+sepulcro+monovar',
  },
  contacto: {
    iglesia: 'Iglesia Parroquial de San Juan Bautista',
    direccion: 'Monóvar, Alicante',
  },
} as const;

export interface EnlaceNavegacion {
  texto: string;
  href: string;
}

export interface GrupoNavegacion {
  texto: string;
  hijos: EnlaceNavegacion[];
}

export const navegacion: Array<EnlaceNavegacion | GrupoNavegacion> = [
  { texto: 'Inicio', href: '/' },
  {
    texto: 'La Cofradía',
    hijos: [
      { texto: 'Historia', href: '/historia' },
      { texto: 'Directiva', href: '/directiva' },
      { texto: 'Insignias y Trono', href: '/insignias-y-trono' },
      { texto: 'Santo Sepulcro', href: '/santo-sepulcro' },
      { texto: 'Jesús Cautivo', href: '/jesus-cautivo' },
    ],
  },
  { texto: 'Procesiones', href: '/procesiones' },
  {
    texto: 'Agrupación',
    hijos: [
      { texto: 'Nuestra Banda', href: '/nuestra-banda' },
      { texto: 'Costaleros', href: '/costaleros' },
    ],
  },
  {
    texto: 'Multimedia',
    hijos: [
      { texto: 'Noticias', href: '/noticias' },
      { texto: 'Fotos', href: '/fotos' },
      { texto: 'Vídeos', href: '/videos' },
      { texto: 'Revista', href: '/revista' },
      { texto: 'Poesías dedicadas', href: '/poesias' },
    ],
  },
  { texto: 'Enlaces', href: '/enlaces' },
  { texto: 'Contacto', href: '/contacto' },
];
