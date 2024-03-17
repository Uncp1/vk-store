import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../../utils/types';
import { getItems } from '../api/api';

export type CartType = {
  cart: ProductType[];
  isLoading: boolean;
};

const initialState: CartType = {
  cart: [],
  isLoading: false,
};

export const fetchFakeCart = createAsyncThunk('fetcheFakeCart', async () => {
  const items = await getItems();
  const itemsWithAmount = items.map((item: ProductType) => ({
    ...item,
    amount: 1, // в тестовом API нет подходящих данных, поэтому устанавливаем количество по умолчанию в 1
  }));
  return itemsWithAmount;
});

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initialState,
  reducers: {
    increaseItemAmount(state, action) {
      const index = action.payload;
      if (state.cart[index].amount < 10) state.cart[index].amount++;
    },
    decreaseItemAmount(state, action) {
      const index = action.payload;
      if (state.cart[index].amount > 1) state.cart[index].amount--;
      else state.cart.splice(index, 1);
    },
    removeCartItem(state, action) {
      const index = action.payload;
      if (index >= 0 && index < state.cart.length) {
        state.cart.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFakeCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFakeCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(fetchFakeCart.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const { actions } = cartSlice;
export const { increaseItemAmount, decreaseItemAmount, removeCartItem } =
  actions;

export default cartSlice.reducer;
