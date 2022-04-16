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
    changeVal: (state, { payload }) => {
      return { ...payload };
    },
  },
});

export const { changeVal } = scoreSlice.actions;

export default scoreSlice.reducer;
