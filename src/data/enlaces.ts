export interface Enlace {
  name: string;
  url: string;
  category: string;
  image?: string;
}

export const enlaces: Enlace[] = [
  {
    name: 'Cofradía Nuestra Señora de la Soledad',
    url: 'http://www.cofradiadelasoledad.es.tl',
    category: 'Cofradías de Monóvar',
    image: 'soledad',
  },
  {
    name: 'Cofradía El Cristo Crucificado',
    url: 'http://www.hermandaddelcristo.com/',
    category: 'Cofradías de Monóvar',
    image: 'cristo',
  },
  {
    name: 'Cofradía Nuestro Padre Jesús Nazareno',
    url: 'http://nuestropadrejesusnazareno.jimdo.com',
    category: 'Cofradías de Monóvar',
    image: 'nazareno',
  },
  {
    name: 'Cofradía Nuestra Señora de los Dolores',
    url: 'https://www.facebook.com/cofradialadolorosa.monovar',
    category: 'Cofradías de Monóvar',
    image: 'dolorosa',
  },
  {
    name: 'Semana Santa Monóvar',
    url: 'http://semanasantamonovar.es.tl',
    category: 'Semana Santa',
    image: 'semanasanta',
  },
];
