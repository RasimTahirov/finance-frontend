import { createSlice } from "@reduxjs/toolkit";
import { authThunk } from "./thunk";
import { initialState } from "./initialState";

import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;

        if (action.payload?.token) {
          Cookies.set("token", action.payload?.token, {
            secure: true,
            sameSite: "strict",
          });
        }
      })
      .addCase(authThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
