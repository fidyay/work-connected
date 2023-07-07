import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

type InitialState = string[];

const initialState: InitialState = ["admin", "user"];
// temporary code
const rolesSlice = createSlice({
  name: "roles",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addRole: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    roles: rolesSlice.reducer,
  },
});

export type RootStoreType = ReturnType<typeof store.getState>;

export default store;
