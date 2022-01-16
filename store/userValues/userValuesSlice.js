import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  userPurpose: "",
  userMinPrice: 0,
  userMaxPrice: 0,
  userMinRooms: 0,
  userMaxRooms: 0,
  userMinBaths: 0,
  userMaxBaths: 0,
  userMinArea: 0,
  userMaxArea: 0,
  userFurnishingStatus: "",
  userTypeId: 0, //apartments
};

const userValuesSlice = createSlice({
  name: "userValues",
  initialState,
  reducers: {
    filterByPrice: (state, action) => {
      state.userMinPrice = action.payload[0];
      state.userMaxPrice = action.payload[1];
    },
    filterByArea: (state, action) => {
      state.userMinArea = action.payload[0];
      state.userMaxArea = action.payload[1];
    },
    filterByBaths: (state, action) => {
      state.userMinBaths = action.payload[0];
      state.userMaxBaths = action.payload[1];
    },
    filterByRooms: (state, action) => {
      state.userMinRooms = action.payload[0];
      state.userMaxRooms = action.payload[1];
    },
    filterByFurnishStatus: (state, action) => {
      state.userFurnishingStatus = action.payload;
    },
    filterByType: (state, action) => {
      state.userTypeId = action.payload;
    },
    clearFilters: (state) => {
      state = initialState;
    },
  },
});

export const {
  filterByPrice,
  filterByArea,
  filterByBaths,
  filterByRooms,
  filterByFurnishStatus,
  filterByType,
  clearFilters
} = userValuesSlice.actions;
export default userValuesSlice.reducer;
