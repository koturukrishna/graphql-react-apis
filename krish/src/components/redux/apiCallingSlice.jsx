import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 8,
};

export const apiCallingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  apiCallingSlice.actions;

export default apiCallingSlice.reducer;
