import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Auth = {
  token?: string;
  user?: any;
};

const initialState: Auth = {
  token: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<any>): Auth => ({
      ...action.payload,
    }),
    setToken: (state, action: PayloadAction<any>): Auth => ({
      ...state,
      token: action.payload,
    }),
    setUser: (state, action: PayloadAction<any>): Auth => ({
      ...state,
      user: action.payload,
    }),

    logOut: () => initialState,
  },
});

export const { setAuth, setToken, setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
