import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_HOST;

// GET /api/v1/prices
export const fetchPrices = createAsyncThunk('/api/v1/prices', async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/v1/prices`)
    return data
  } catch (error) {
    console.log(error);
  }
})

const priceSlice = createSlice({
  name: 'prices',
  initialState: {
    'all_prices': [],
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPrices.fulfilled, (state, action) => {
        state.all_prices = action.payload
      })
      .addCase(fetchPrices.rejected, (state, action) => {
        state.all_prices = []
        state.error = action.error
      })
  }
})

export default priceSlice.reducer