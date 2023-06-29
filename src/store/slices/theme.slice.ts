import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "light" },
  reducers: {
    toggleMode: ({ mode }) => ({ mode: mode === "light" ? "dark" : "light" }),
  },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
