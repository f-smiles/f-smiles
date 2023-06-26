import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_HOST;

// GET /api/products/:id
export const fetchSingleProduct = createAsyncThunk('/api/v1/products/:id', async (productId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/v1/products/${productId}`)
    return data
  } catch (error) {
    console.log(error);
  }
})

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState: {
    status: 'uninitialized',
    'single_product': [],
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.single_product = action.payload
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.status = 'failed'
        state.single_product = []
        state.error = action.error
      })
  }
})

export default singleProductSlice.reducer