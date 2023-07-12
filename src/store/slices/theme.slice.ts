import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Mode = "light" | "dark" | "system";

type InitialState = { mode: Mode };

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "light" } as InitialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Mode>) => {
      state.mode = payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
