import { PayloadAction, createSlice, createSelector } from "@reduxjs/toolkit";

export type Mode = "light" | "dark" | "system";

type InitialState = { mode: Mode; systemDark: boolean };

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "light", systemDark: false } as InitialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Mode>) => {
      state.mode = payload;
    },
    setSystemDark: (state, { payload }: PayloadAction<boolean>) => {
      state.systemDark = payload;
    },
  },
});

export const themeSelector = createSelector(
  (state: any): Mode => state.theme.mode,
  (state: any): boolean => state.theme.systemDark,
  (mode, systemDark) => ({ mode, systemDark })
);

export const { setTheme, setSystemDark } = themeSlice.actions;
export default themeSlice.reducer;
