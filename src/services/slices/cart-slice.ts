import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CartType } from '../../utils/types';
import { getItems } from '../api/api';

const initialState: CartType = {
  cart: [],
};

export const fetchFakeCart = createAsyncThunk('fetcheFakeCart', async () => {
  const items = await getItems();
  return items;
});

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initialState,
  reducers: {
    changeItemAmount(state, action) {},
    removeCartItem(state, action) {
      const index = action.payload;
      console.log(index);
      if (index >= 0 && index < state.cart.length) {
        state.cart.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFakeCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});

const { actions } = cartSlice;
export const { changeItemAmount, removeCartItem } = actions;

export default cartSlice.reducer;
