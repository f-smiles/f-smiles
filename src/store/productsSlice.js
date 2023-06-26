import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_HOST;

// GET /api/products
export const fetchProducts = createAsyncThunk('/api/v1/products', async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/v1/products`)
    return data
  } catch (error) {
    console.log(error);
  }
})

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    status: 'uninitialized',
    'all_products': [],
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.all_products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.all_products = []
        state.error = action.error
      })
  }
})

export default productsSlice.reducer