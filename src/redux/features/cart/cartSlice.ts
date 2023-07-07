import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';

type ICart = {
  products: IProduct[];
};

const initialState: ICart = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
