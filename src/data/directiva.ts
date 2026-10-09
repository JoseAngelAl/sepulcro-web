export interface CargoDirectiva {
  cargo: string;
  nombre: string;
  tipo?: 'directivo' | 'asesor';
}

export const directiva: CargoDirectiva[] = [
  { cargo: 'Hermano Mayor', nombre: 'Alberto Pérez Martínez', tipo: 'directivo' },
  { cargo: 'Vicepresidente', nombre: 'José Antonio Bellot Mallebrera', tipo: 'directivo' },
  { cargo: 'Secretaria', nombre: 'Mª Carmen Calpena Poveda', tipo: 'directivo' },
  { cargo: 'Tesorero', nombre: 'Antonio Poveda Vidal', tipo: 'directivo' },
  { cargo: 'Vocal', nombre: 'Francisco Verdú Esteve', tipo: 'directivo' },
  { cargo: 'Vocal', nombre: 'Noe Verdú Fenoll', tipo: 'directivo' },
  { cargo: 'Vocal', nombre: 'Luis Martínez Soro', tipo: 'directivo' },
  { cargo: 'Asesor', nombre: 'Rafael Díaz Carbonell', tipo: 'asesor' },
  { cargo: 'Asesor', nombre: 'José Ángel Alfonso Buendicho', tipo: 'asesor' },
  { cargo: 'Asesor', nombre: 'Francisco García Domenech', tipo: 'asesor' },
  { cargo: 'Asesora', nombre: 'Virgen Gualda Latorre', tipo: 'asesor' },
  { cargo: 'Asesor', nombre: 'José Antonio Guardiola Sánchez', tipo: 'asesor' },
];
