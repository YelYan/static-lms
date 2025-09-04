import type {  PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type AuthT = { isLoggedIn: boolean; token: string | null };

const initialState: AuthT = {
  isLoggedIn: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInSuccess(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    signOutSuccess(state) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { signInSuccess, signOutSuccess } = authSlice.actions;

export const accessTokenState = (state: { auth: AuthT }) => state.auth;

export default authSlice.reducer;
