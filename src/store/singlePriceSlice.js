import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_HOST;

// GET /api/prices/:id
export const fetchSinglePrice = createAsyncThunk('/api/v1/prices/:id', async (priceId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/v1/prices/${priceId}`)
    return data
  } catch (error) {
    console.log(error);
  }
})

const singlePriceSlice = createSlice({
  name: 'singlePrice',
  initialState: {
    status: 'uninitialized',
    'single_price': [],
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSinglePrice.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchSinglePrice.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.single_price = action.payload
      })
      .addCase(fetchSinglePrice.rejected, (state, action) => {
        state.status = 'failed'
        state.single_price = []
        state.error = action.error
      })
  }
})

export default singlePriceSlice.reducer