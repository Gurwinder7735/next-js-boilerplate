import { IAlertsState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IAlertsState = {
  loading: false,
  success: "",
  error: "",
};

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSuccess(state, action) {
      state.success = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export default alertsSlice.reducer;
export const { setLoading, setSuccess, setError } = alertsSlice.actions;
