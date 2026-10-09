export type GrupoInstrumento = 'Cornetas de 3 pistones' | 'Cornetas de 2 pistones' | 'Timbales redobladores' | 'Timbales' | 'Bombos';

export interface GrupoBanda {
  instrumento: GrupoInstrumento;
  componentes: string[];
}

export const anioBanda = 2012;

export const banda: GrupoBanda[] = [
  {
    instrumento: 'Cornetas de 3 pistones',
    componentes: [
      'Antonio Poveda Seva',
      'Javier Guardiola Deltell',
      'Vicente Alfonso Samper',
      'Juan Alonso Díez',
      'Antonio Pérez Martínez',
      'Álvaro Martínez Vidal',
      'Luis Guardiola Deltell',
      'Aitana Guardiola Verdú',
      'Marcos López Giménez',
    ],
  },
  {
    instrumento: 'Cornetas de 2 pistones',
    componentes: [
      'Miguel López Santa',
      'Juan Payá Guarinos',
      'Israel Poveda Cebrián',
      'Andrés Monzó Navarro',
      'Juan Payá Medina',
    ],
  },
  {
    instrumento: 'Timbales redobladores',
    componentes: ['Fco. Javier López Giménez', 'F. José García Corbi', 'Javier Alfonso Martínez'],
  },
  {
    instrumento: 'Timbales',
    componentes: [
      'Enrique Payá Mira',
      'Patricia Fenoll Parra',
      'Mª Reme Esteve López',
      'Dalila Candel Juan',
      'Belén Arsuaga Blanes',
      'Manuel Poveda López',
      'Marina Campos Morán',
      'F. José Ros Esquembre',
      'José A. Sánchez Olea',
      'Miranda Sánchez Máñez',
      'F. Javier Ramírez Sánchez',
      'Raúl Payá Maestre',
      'Antonio Sánchez Máñez',
    ],
  },
  {
    instrumento: 'Bombos',
    componentes: ['José Juan Tenza Aguilar', 'Enrique Candel Juan', 'Ramón Amaro Rico Falcó', 'José Luis Payá Guarinos'],
  },
];

export const responsableBanda = 'Antonio Poveda Vidal';
