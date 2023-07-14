import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_HOST;

// GET /api/products
export const fetchInventory = createAsyncThunk(
  "/api/v1/inventory",
  async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/v1/inventory`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    items: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.items = [];
        state.error = action.error;
      });
  },
});

export default inventorySlice.reducer;
