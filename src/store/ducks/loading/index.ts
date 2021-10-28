import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from '../products';

export interface ILoadingState {
  isLoading: boolean
}

const initialState: ILoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
