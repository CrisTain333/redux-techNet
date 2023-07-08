import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type IProduct = {
  status: boolean;
  priceRange: number;
};
const initialState: IProduct = {
  priceRange: 150,
  status: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleStock: (state) => {
      state.status = !state.status;
    },
    filterPrice: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { toggleStock, filterPrice } = productSlice.actions;
export const productReducer = productSlice.reducer;
