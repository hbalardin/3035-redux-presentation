import { createAsyncThunk } from '@reduxjs/toolkit';
import { addToCart, incrementCount, updateProductQuantity } from '..';

import { IState } from '../../..';

interface HandleAddToCartProps {
  productId: string
}

export const handleAddToCart = createAsyncThunk<void, HandleAddToCartProps, { state: IState }>(
  'products/handleAddToCart',
  async ({ productId }, thunkApi) => {
    const { cartProducts } = thunkApi.getState().cart;

    const productIsAlreadyOnCart = cartProducts.some((product) => product.id === productId);

    if (productIsAlreadyOnCart) {
      thunkApi.dispatch(updateProductQuantity({ id: productId }));
    } else {
      thunkApi.dispatch(addToCart({ id: productId }));
    }

    thunkApi.dispatch(incrementCount());
  },
);
