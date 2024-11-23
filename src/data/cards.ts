import { TarotCard } from '../types/cards';

export const cards: TarotCard[] = [
  {
    id: 0,
    name: 'El Loco',
    type: 'majorArcana',
    image: 'https://images.unsplash.com/photo-1601024445121-e294d45c0424',
    description: 'El Loco representa el inicio de un viaje espiritual y la libertad de espíritu.',
    positiveReading: 'Es momento de tomar riesgos y confiar en tu intuición.',
    negativeReading: 'Cuidado con las decisiones impulsivas.'
  },
  {
    id: 1,
    name: 'El Mago',
    type: 'majorArcana',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb',
    description: 'El Mago representa el poder de la manifestación y la habilidad de transformar.',
    positiveReading: 'Tienes todas las herramientas necesarias para el éxito.',
    negativeReading: 'No desperdicies tu potencial en manipulaciones.'
  },
  {
    id: 2,
    name: 'La Sacerdotisa',
    type: 'majorArcana',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc',
    description: 'La Sacerdotisa representa la intuición y los misterios ocultos.',
    positiveReading: 'Confía en tu sabiduría interior.',
    negativeReading: 'No ignores las señales sutiles.'
  }
  // Añadiremos más cartas después
];

export const spreadPositions = {
  'tirada-celta': [
    'Situación Actual',
    'Influencia Inmediata',
    'Pasado Distante',
    'Pasado Reciente',
    'Mejor Resultado Posible',
    'Futuro Inmediato',
    'Tu Actitud',
    'Influencias Externas',
    'Esperanzas y Temores',
    'Resultado Final'
  ],
  'tirada-estrella': [
    'Tema Central',
    'Influencias Pasadas',
    'Influencias Ocultas',
    'Poder Personal',
    'Camino Espiritual',
    'Futuro Cercano',
    'Resultado Final'
  ],
  'tirada-amor': [
    'Estado Actual del Amor',
    'Sentimientos de la Pareja',
    'Dinámica de la Relación',
    'Desafíos a Superar',
    'Consejo del Universo',
    'Evolución del Vínculo',
    'Energías Transformadoras',
    'Resultado del Camino'
  ],
  'tirada-tiempo': [
    'Tu Pasado',
    'Tu Presente',
    'Tu Futuro'
  ],
  'si-o-no': [
    'Respuesta a tu Pregunta'
  ]
};

export const getSpreadPositions = (spreadType: string): string[] => {
  return spreadPositions[spreadType as keyof typeof spreadPositions] || [];
};

export const getSpreadDescription = (spreadType: string, position: number): string => {
  const descriptions: Record<string, Record<number, string>> = {
    'tirada-celta': {
      1: 'Esta carta revela la esencia de tu situación actual',
      2: 'Los desafíos inmediatos que enfrentas',
      3: 'Las raíces profundas del asunto',
      4: 'Eventos recientes que han influido',
      5: 'El mejor resultado posible',
      6: 'Los desarrollos que se aproximan',
      7: 'Tu perspectiva personal',
      8: 'Cómo te perciben los demás',
      9: 'Tus deseos y temores más profundos',
      10: 'El resultado final de este camino'
    },
    'tirada-estrella': {
      1: 'El núcleo de tu consulta',
      2: 'Las experiencias que te han formado',
      3: 'Los aspectos ocultos por revelar',
      4: 'Tus recursos internos',
      5: 'Tu conexión espiritual',
      6: 'El futuro cercano',
      7: 'La culminación de tu camino'
    },
    'tirada-amor': {
      1: 'Tu estado emocional actual',
      2: 'Los sentimientos de tu pareja',
      3: 'La dinámica entre ustedes',
      4: 'Los obstáculos a superar',
      5: 'El mensaje del universo',
      6: 'La evolución de la relación',
      7: 'Las energías transformadoras',
      8: 'El destino del amor'
    },
    'tirada-tiempo': {
      1: 'Las influencias de tu pasado',
      2: 'Tu momento presente',
      3: 'El camino hacia tu futuro'
    },
    'si-o-no': {
      1: 'La respuesta a tu pregunta'
    }
  };

  return descriptions[spreadType]?.[position] || 'Interpretación de la carta';
};