import { createSlice, isAction } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    isActive: null,
  },
  reducers: {
    toogleGpt: (state, action) => {
      state.isActive = !state.isActive;
      console.log("toogle");
    },
    removeGpt: (state, action) => {
      console.log("yes");
      state.isActive = null;
    },
  },
});

export const { toogleGpt, removeGpt } = gptSlice.actions;
export default gptSlice.reducer;
