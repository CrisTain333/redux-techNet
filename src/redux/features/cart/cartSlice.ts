/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ICart = {
  products: IProduct[];
  total: number;
};

const initialState: ICart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const isProductExist = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (isProductExist) {
        isProductExist.quantity = isProductExist.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    increaseQuantity: (state, action: PayloadAction<IProduct>) => {
      const currentProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (currentProduct) {
        currentProduct.quantity = currentProduct.quantity! + 1;
      }
      state.total += action.payload.price;
    },
    decreaseQuantity: (state, action: PayloadAction<IProduct>) => {
      const currentProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (currentProduct && currentProduct.quantity !== 1) {
        currentProduct.quantity = currentProduct.quantity! - 1;
      }
      state.total -= action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      const removedProduct = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.products = removedProduct;
      // state.products.push(removedProduct)
      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
