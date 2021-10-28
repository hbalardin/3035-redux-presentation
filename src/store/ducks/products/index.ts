import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '../../../models/product';

export interface IProductsState {
  items: IProduct[]
  favoritesIds: string[]
}

const initialState: IProductsState = {
  items: [],
  favoritesIds: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<{ products: IProduct[] }>) => {
      const { products } = action.payload;
      state.items = products;
    },
    addFavorite: (state, action: PayloadAction<{ productId: string }>) => {
      const { productId } = action.payload;
      state.favoritesIds.push(productId);
    },
    removeFavorite: (state, action: PayloadAction<{ productId: string }>) => {
      const { productId } = action.payload;
      state.favoritesIds = state.favoritesIds.filter((id) => id !== productId);
    },
  },
});

export const { setProducts, addFavorite, removeFavorite } = productsSlice.actions;

export * from './thunks';

export default productsSlice.reducer;
