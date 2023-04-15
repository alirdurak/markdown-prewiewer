import { configureStore } from '@reduxjs/toolkit'
import markdownSlice from "./markdown-slice"
export const store = configureStore({
  reducer: {
    markdown: markdownSlice
   
  },
})
