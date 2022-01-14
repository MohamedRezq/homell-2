import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPropsForRent, getPropsForSale } from "utils/bayutAPI";

let initialState = {
  propsForRent: [],
  propsForSale: [],
  minSalePrice: 0,
  maxSalePrice: 0,
  minRentPrice: 0,
  maxRentPrice: 0,
  minArea: 0,
  maxArea: 0,
  minBaths: 0,
  maxBaths: 0,
  minRooms: 0,
  maxRooms: 0,
  currentPage: 10,
};

export const getApiSaleValues = createAsyncThunk(
  "apiSaleValues/getApiSaleValues",
  getPropsForSale(16)
);
export const getApiRentValues = createAsyncThunk(
  "apiRentValues/getApiRentValues",
  getPropsForRent
);

const apiValuesSlice = createSlice({
  name: "apiValues",
  initialState,
  reducers: {
    storeForSaleProps: (state, action) => {
      state.propsForSale = action.payload;
      let forSalePrices = [];
      let areaValues = [];
      let bathValues = [];
      let roomValues = [];
      state.propsForSale.map((property, i) => {
        forSalePrices.push(property.price);
        areaValues.push(property.area);
        bathValues.push(property.baths);
        roomValues.push(property.rooms);
      });
      state.minSalePrice = Math.min(...forSalePrices);
      state.maxSalePrice = Math.max(...forSalePrices);
      state.minArea = Math.min(...areaValues);
      state.maxArea = Math.max(...areaValues);
      state.minBaths = Math.min(...bathValues);
      state.maxBaths = Math.max(...bathValues);
      state.minRooms = Math.min(...roomValues);
      state.maxRooms = Math.max(...roomValues);
    },
    storeForRentProps: (state, action) => {
      state.propsForRent = action.payload;
      let forSalePrices = [];
      let areaValues = [];
      let bathValues = [];
      let roomValues = [];
      state.propsForRent.map((property, i) => {
        forSalePrices.push(property.price);
        areaValues.push(property.area);
        bathValues.push(property.baths);
        roomValues.push(property.rooms);
      });
      state.minSalePrice = Math.min(...forSalePrices);
      state.maxSalePrice = Math.max(...forSalePrices);
      state.minArea = Math.min(...areaValues);
      state.maxArea = Math.max(...areaValues);
      state.minBaths = Math.min(...bathValues);
      state.maxBaths = Math.max(...bathValues);
      state.minRooms = Math.min(...roomValues);
      state.maxRooms = Math.max(...roomValues);
    },
    
  },
  extraReducers: {
    [getApiSaleValues.fulfilled]: (state, action) => {
      state.propsForSale = action.payload.hits;
      
    },
    [getApiRentValues.fulfilled]: (state, action) => {
      state.propsForRent = action.payload.hits;
      let forRentPrices = [];
      action.payload.hits.map((property, i) => {
        forRentPrices.push(property.price);
      });
      const minForRentPrice = Math.min(...forRentPrices);
      const maxForRentPrice = Math.max(...forRentPrices);
      state.minRentPrice = minForRentPrice;
      state.maxRentPrice = maxForRentPrice;
    },
  },
});

export const { storeForSaleProps, storeForRentProps } = apiValuesSlice.actions;
export default apiValuesSlice.reducer;
