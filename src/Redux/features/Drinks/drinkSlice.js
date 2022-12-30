import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "cocktailProducts/product",
  async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    );
    return response.json();
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "cocktailSingleProduct/product",
  async ({ id }) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return response.json();
  }
);

export const drinkSlice = createSlice({
  name: "cocktail",
  initialState: {
    loading: false,
    cocktails: [],
    cocktail: [],
    error: null
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSingleProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drinks;
    },
    [fetchSingleProduct.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

export default drinkSlice.reducer;
