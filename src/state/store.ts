import { configureStore } from "@reduxjs/toolkit";
import rolesReducer from "./rolesSlice";
import currentUserReducer from "./currentUserSlice";

const store = configureStore({
  reducer: {
    roles: rolesReducer,
    currentUser: currentUserReducer,
  },
});

export type RootStoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
