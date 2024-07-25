import { IAuthState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IAuthState = {
  user: null,
  authToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setAuthToken, setUser } = authSlice.actions;
