import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginTabCondition: 1,
};

export const loginTabSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setloginTabCondition: (state, action) => {
      state.loginTabCondition = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setloginTabCondition } = loginTabSlice.actions;
export const getloginTabCondition = (state) => state?.login?.loginTabCondition;

export default loginTabSlice.reducer;
