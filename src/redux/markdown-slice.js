import { createSlice } from "@reduxjs/toolkit";
import sample from "../assets/sample"


const initialState = {
  text: "",
};

const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {
    sampleMarkdown: (state) => {
      state.text = sample;
    },
    changeText: (state, action) => {
      state.text = action.payload;
    },
    clearText: (state) => {
      state.text = "";
    },
  },
});
export const { sampleMarkdown, changeText, clearText } = markdownSlice.actions;
export default markdownSlice.reducer;
