import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postCondition: false,
 
};

export const counterSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostCondition: (state, action) => {
      state.postCondition = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPostCondition,
} = counterSlice.actions;
export const getPostCondition = (state) => state?.search?.postCondition;


export default counterSlice.reducer;
