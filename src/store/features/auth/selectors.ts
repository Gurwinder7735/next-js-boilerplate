import { RootState } from "../../types";

export const userSelector = (state: RootState) => state.auth.user;
export const authTokenSelector = (state: RootState) => state.auth.authToken;
