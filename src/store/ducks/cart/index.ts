import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICartProduct {
  id: string;
  quantity: number;
}

export interface IProductsState {
  count: number
  cartProducts: ICartProduct[]
}

const initialState: IProductsState = {
  count: 0,
  cartProducts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const cartProduct = { id, quantity: 1 };

      state.cartProducts.push(cartProduct);
    },
    incrementCount: (state) => {
      state.count += 1;
    },
    updateProductQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      const updatedProducts = state.cartProducts.map((product) => {
        if (product.id !== id) return product;

        return {
          ...product,
          quantity: product.quantity + 1,
        };
      });

      state.cartProducts = updatedProducts;
    },
  },
});

export const { addToCart, incrementCount, updateProductQuantity } = cartSlice.actions;

export * from './thunks';

export default cartSlice.reducer;
