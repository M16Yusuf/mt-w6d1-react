import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  smoker: [],
};

const smokerSlice = createSlice({
  initialState,
  name: "smokerkoda",
  reducers: {
    addDataSmoker: (state, { payload }) => {
      const index = state.smoker.findIndex((data) => {
        return data.name === payload.smoker.name;
      })
      if (index === -1) {
        state.data.push(payload.smoker);
      }
    },
    removeDataSmoker: (state, { payload }) => {
      const index = state.smoker.findIndex((data) => {
        return data.name === payload.smoker.name;
      });
      state.data.splice(index, 1);
    },
  },
});

export const { addDataSmoker, removeDataSmoker } = smokerSlice.actions;

export default smokerSlice.reducer;