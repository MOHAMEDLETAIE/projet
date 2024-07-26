import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  tasks: [
    {
       text: "learn html",
      isDone: false,
    },
    { 

      text: "learn css",
      isDone: false,
    },
    {
      text: "learn js",
      isDone: false,
    },
  ],
};

export const Slice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {  } = Slice.actions;

export default Slice.reducer;
