import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {},
});

export const productReducer = productSlice.reducer;
