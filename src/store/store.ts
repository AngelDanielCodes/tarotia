import { configureStore } from '@reduxjs/toolkit';
import tarotReducer from './tarotSlice';

export const store = configureStore({
  reducer: {
    tarot: tarotReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;