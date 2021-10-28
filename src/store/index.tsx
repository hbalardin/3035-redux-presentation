import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
  },
});

export type IState = ReturnType<typeof store.getState>
export type IDispatch = typeof store.dispatch
