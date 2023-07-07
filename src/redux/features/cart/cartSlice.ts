/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { toast } from '@/components/ui/use-toast';
import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const isProductExist = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (isProductExist) {
        isProductExist.quantity = isProductExist.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action: PayloadAction<IProduct>) => {
      const currentProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (currentProduct) {
        currentProduct.quantity = currentProduct.quantity! + 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<IProduct>) => {
      const currentProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (currentProduct && currentProduct.quantity !== 1) {
        currentProduct.quantity = currentProduct.quantity! - 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      const removedProduct = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.products = removedProduct;
      // state.products.push(removedProduct)
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
