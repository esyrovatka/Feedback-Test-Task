import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Planning: {
    firstVal: 4,
    secondVal: 5,
  },
  Delivering: {
    firstVal: 2,
    secondVal: 5,
    thirdVal: 4,
  },
  Lorem: {
    firstVal: 4,
    secondVal: 2,
    thirdVal: 5,
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
