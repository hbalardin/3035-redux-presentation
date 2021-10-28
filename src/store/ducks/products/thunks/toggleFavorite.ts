import { createAsyncThunk } from '@reduxjs/toolkit';
import { addFavorite, removeFavorite } from '..';

import { IState } from '../../..';

interface ToggleFavoriteProps {
  productId: string
}

export const toggleFavorite = createAsyncThunk<void, ToggleFavoriteProps, { state: IState }>(
  'products/toggleFavorite',
  async ({ productId }, thunkApi) => {
    const { favoritesIds } = thunkApi.getState().products;

    favoritesIds.includes(productId)
      ? thunkApi.dispatch(removeFavorite({ productId }))
      : thunkApi.dispatch(addFavorite({ productId }));
  },
);
