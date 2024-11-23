import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TarotCard } from '../types/cards';

interface TarotState {
  selectedCards: number[];
  revealedCards: TarotCard[];
  usedCardIds: number[];
  currentSpread: string;
  isRevealing: boolean;
  isComplete: boolean;
}

const initialState: TarotState = {
  selectedCards: [],
  revealedCards: [],
  usedCardIds: [],
  currentSpread: '',
  isRevealing: false,
  isComplete: false
};

export const tarotSlice = createSlice({
  name: 'tarot',
  initialState,
  reducers: {
    selectCard: (state, action: PayloadAction<number>) => {
      if (!state.selectedCards.includes(action.payload)) {
        state.selectedCards = [...state.selectedCards, action.payload];
      }
    },
    revealCard: (state, action: PayloadAction<TarotCard>) => {
      state.revealedCards = [...state.revealedCards, action.payload];
      state.usedCardIds = [...state.usedCardIds, action.payload.id];
    },
    setSpread: (state, action: PayloadAction<string>) => {
      return {
        ...initialState,
        currentSpread: action.payload
      };
    },
    resetSpread: () => initialState,
    setRevealing: (state, action: PayloadAction<boolean>) => {
      state.isRevealing = action.payload;
    },
    setComplete: (state, action: PayloadAction<boolean>) => {
      state.isComplete = action.payload;
    }
  }
});

export const { 
  selectCard, 
  revealCard, 
  setSpread, 
  resetSpread,
  setRevealing,
  setComplete 
} = tarotSlice.actions;

export default tarotSlice.reducer;