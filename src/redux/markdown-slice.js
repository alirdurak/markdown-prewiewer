import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {
    sampleMarkdown: (state) => {
      const sample = fetch("../assets/sample.txt")
        .then((response) => response.text())
        .then((data) => {
          // Dosya içeriği burada kullanılabilir
          return data;
        })
        .catch((error) => {
          console.error("Hata:", error);
        });

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
