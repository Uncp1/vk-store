import { createSelector } from '@reduxjs/toolkit';

export const selectCartItemByIndex = createSelector(
  (state) => state.cart.cart,
  (_, index) => index,
  (cart, index) => cart[index]
);
