import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: false,
 
};

export const counterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSearchData,
} = counterSlice.actions;
export const getSearchData = (state) => state?.search?.searchData;


export default counterSlice.reducer;
