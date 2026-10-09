export interface Procesion {
  id: string;
  nombre: string;
  imagen: 'cautivo' | 'sepulcro';
  dia: string;
  hora: string;
  salida: string;
  itinerario: string;
  descripcion: string;
  fechas: string[];
}

export const procesiones: Procesion[] = [
  {
    id: 'lunes-santo',
    nombre: 'Procesión de Jesús Cautivo',
    imagen: 'cautivo',
    dia: 'Lunes Santo',
    hora: '21:30',
    salida: 'Iglesia Parroquial de San Juan Bautista',
    itinerario: 'Calle Mayor, plaza de la Constitución y calles del casco histórico de Monóvar.',
    descripcion:
      'Desde 2008 la cofradía procesiona también el Lunes Santo con la imagen de Jesús Cautivo, incorporando un día más al programa procesional monovero.',
    fechas: ['2026-03-30T21:30:00+02:00', '2027-03-22T21:30:00+01:00'],
  },
  {
    id: 'viernes-santo',
    nombre: 'Procesión del Santo Entierro',
    imagen: 'sepulcro',
    dia: 'Viernes Santo',
    hora: '20:00',
    salida: 'Calle Mayor',
    itinerario: 'Calle Mayor y recorrido tradicional del Santo Entierro por Monóvar.',
    descripcion:
      'La cofradía procesiona desde 1942 con la imagen del Cristo Yacente, santo y seña de la Semana Santa monovera.',
    fechas: ['2026-04-03T20:00:00+02:00', '2027-03-26T20:00:00+01:00'],
  },
];

export interface ProximaProcesion {
  procesion: Procesion;
  fecha: Date;
}

export function getProximaProcesion(ahora: Date = new Date()): ProximaProcesion | null {
  const todas = procesiones
    .flatMap((procesion) => procesion.fechas.map((fecha) => ({ procesion, fecha: new Date(fecha) })))
    .filter((item) => item.fecha.getTime() > ahora.getTime())
    .sort((a, b) => a.fecha.getTime() - b.fecha.getTime());

  return todas[0] ?? null;
}
