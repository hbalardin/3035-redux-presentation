import { createAsyncThunk } from '@reduxjs/toolkit';
import { setProducts } from '..';

import { IState } from '../../..';

import payload from '../../../../payload.json';

export const fetchProducts = createAsyncThunk<void, undefined, { state: IState }>(
  'products/fetchProducts',
  async (_, thunkApi) => {
    const fakeRequest = await new Promise((resolve, reject) => {
      setTimeout(() => {
        thunkApi.dispatch(setProducts({ products: payload.data }));
        resolve('Success');
      }, 4000);
    });
  },
);
