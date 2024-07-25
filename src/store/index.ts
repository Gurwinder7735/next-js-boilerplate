import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or use 'redux-persist/lib/localStorage' for localStorage
import rootReducer from "./root-reducer";

const middlewares: any = [];

const persistConfig = {
  key: "root", // a unique key to identify the root of your Redux store in local storage
  storage, // the storage engine to use (e.g., localStorage, sessionStorage)
  // Optionally, you can specify specific state slices to persist:
  // whitelist: ['slice1', 'slice2'],
  // blacklist: ['slice3', 'slice4']
};

export const makeStore = () => {
  return configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  });
};
