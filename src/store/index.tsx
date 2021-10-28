import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './ducks/cart';
import loadingReducer from './ducks/loading';
import productsReducer from './ducks/products';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    loading: loadingReducer,
    products: productsReducer,
  },
});

export type IState = ReturnType<typeof store.getState>
export type IDispatch = typeof store.dispatch
