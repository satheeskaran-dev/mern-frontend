import localStorage from "redux-persist/lib/storage/session";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import themeReducer from "./slices/theme.slice";
import notificationReducer from "./slices/notification.slice";
import thunk from "redux-thunk";
import { authServiceApi } from "../service/authService";
import { userServiceApi } from "../service/userService";

const rootConfig = {
  key: "mern_stack",
  storage: localStorage,
  whitelist: ["authService", "auth", "theme"],
};

const persistedReducer = persistReducer(
  rootConfig,
  combineReducers({
    auth: authReducer,
    theme: themeReducer,
    notification: notificationReducer,
    [authServiceApi.reducerPath]: authServiceApi.reducer,
    [userServiceApi.reducerPath]: userServiceApi.reducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      thunk,
      authServiceApi.middleware,
      userServiceApi.middleware,
    ] as any),
});

setupListeners(store.dispatch);

export const persistedStore = persistStore(store);
