export interface TarotCard {
  id: number;
  name: string;
  type: 'majorArcana' | 'minorArcana';
  image: string;
  description: string;
  positiveReading: string;
  negativeReading: string;
}

export interface ReadingPosition {
  id: number;
  name: string;
  description: string;
}