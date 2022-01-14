import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  purpose: "for-sale",
  minPrice: 0,
  maxPrice: 0,
  noRooms: 0,
  noBaths: 0,
  minArea: 0,
  maxArea: 0,
  furnishingStatus: "unfurnished",
  typeId: 4, //apartments
  rentFrequency: "monthly",
};

const userValuesSlice = createSlice({
  name: "userValues",
  initialState,
  reducers: {
    filterByPrice: (state, action) => {
      state.minPrice = action.payload[0];
      state.maxPrice = action.payload[1];
    },
    filterArea: (state, action) => {
      state.minArea = action.payload[0];
      state.maxArea = action.payload[1];
    },
    filterBaths: (state, action) => {
      state.noBaths = action.payload;
    },
    filterRooms: (state, action) => {
      state.noRooms = action.payload;
    },
    filterFurnishStatus: (state, action) => {
      state.furnishingStatus = action.payload;
    },
    filterType: (state, action) => {
      switch (action.payload) {
        case "Apartment":
          state.typeId = 4;
          break;
        case "Townhouses":
          state.typeId = 16;
          break;
        case "Villas":
          state.typeId = 3;
          break;
        case "Penthouses":
          state.typeId = 18;
          break;
        case "Hotel Apartments":
          state.typeId = 21;
          break;
        default:
          state.typeId = 4;

          break;
      }
    },
    clearFilters: (state) => {
      state = initialState;
    },
  },
});

export const {
  filterByPrice,
  filterArea,
  filterBaths,
  filterRooms,
  filterFurnishStatus,
  filterType,
} = userValuesSlice.actions;
export default userValuesSlice.reducer;
