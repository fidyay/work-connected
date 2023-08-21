import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface CurrentUser {
  roles: string[];
  id: string;
  names: string;
}

interface CurrentUserState extends CurrentUser {
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const fetchCurrentUser = createAsyncThunk(
  "currentUser/fetchCurrentUser",
  async () => {
    const curUserInfo = await fetch("/api/current-user");
    const data = (await curUserInfo.json()) as CurrentUser;
    return data;
  }
);

const initialState: CurrentUserState = {
  roles: [],
  id: "",
  names: "",
  loading: "idle",
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<CurrentUser>) {
      const { id, names, roles } = action.payload;
      state.id = id;
      state.names = names;
      state.roles = roles;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        const { id, names, roles } = action.payload;
        state.id = id;
        state.names = names;
        state.roles = roles;
        state.loading = "succeeded";
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { setUserInfo } = currentUserSlice.actions;
export default currentUserSlice.reducer;
