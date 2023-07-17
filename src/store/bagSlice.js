import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: 'bag',
  initialState: {
    'line_items': [],
    status: 'idle',
    error: null
  },
  reducers: {
    addToBag: (state, action) => {
      const { id, name, image, price, quantity, variant } = action.payload;
        const existingItem = state.line_items.find(item => item.id === action.payload.id)
        if (existingItem) {
          existingItem.quantity++
        } else {
          state.line_items.push({
            id,
            name,
            image,
            price,
            quantity,
            variant
          })
        }
    },
    removeFromBag: (state, action) => {
        const removeItem = state.line_items.filter(item => item.id !== action.payload)
        state.line_items = removeItem
     },
    clearBag: (state) => {
        state.line_items = []
    },
    incrementQuantity: (state, action) => {
        const item = state.line_items.find(item => item.id === action.payload)
        if (item) { item.product.quantity += 1 }
    },
    decrementQuantity: (state, action) => {
        const item = state.line_items.find(item => item.id === action.payload)
        if (item && item.quantity === 1) { item.quantity = 1 }
        else { item.quantity -= 1}
    },
    getBagTotal: (state) => {
      let totalQuantity = 0;
      let totalPrice = 0;
      state.line_items.forEach(item => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
      });
      return { totalPrice, totalQuantity };
    }
  },
})

export const { addToBag, removeFromBag, clearBag, incrementQuantity, decrementQuantity, updateQuantity } = bagSlice.actions
export default bagSlice.reducer