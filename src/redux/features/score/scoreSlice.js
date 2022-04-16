import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Planning: {
    firstVal: 1,
    secondVal: 2,
  },
  Delivering: {
    firstVal: 1,
    secondVal: 2,
    thirdVal: 3,
  },
  Lorem: {
    firstVal: 1,
    secondVal: 2,
    thirdVal: 3,
  },
};

export const scoreSlice = createSlice({
  name: "score",
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

export const { increment, decrement, incrementByAmount } = scoreSlice.actions;

export default scoreSlice.reducer;
