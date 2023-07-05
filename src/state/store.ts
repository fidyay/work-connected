import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  [key: string]: any;
}

const initialState: InitialState = {};
// temporary code
const chatSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },
});

export default store;
