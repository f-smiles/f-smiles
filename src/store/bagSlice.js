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
        const existingItem = state.line_items.find(item => item.id === action.payload.id)
        if (existingItem) {
          existingItem.quantity++
        } else {
          state.line_items.push({...action.payload, quantity: 1})
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
        if (item) { item.quantity += 1 }

    },
    decrementQuantity: (state, action) => {
        const item = state.line_items.find(item => item.id === action.payload)
        if (item && item.quantity === 1) { item.quantity = 1 }
        else { item.quantity -= 1}
    },
    // updateQuantity: (state, action) => {
    //     const { itemId, quantity } = action.payload
    //     const item = state.line_items.find(item => item.id === itemId)
    //     if (item) {
    //       item.quantity = quantity
    //     }
    // }
  },
})

export const { addToBag, removeFromBag, clearBag, incrementQuantity, decrementQuantity, updateQuantity } = bagSlice.actions
export default bagSlice.reducer