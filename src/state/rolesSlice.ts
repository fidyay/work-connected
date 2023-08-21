import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
  EntityState,
} from "@reduxjs/toolkit";

interface ChatPermission {
  chatId: string;
  read: string;
  write: string;
}

interface Role {
  id: string;
  name: string;
  controledBy: string;
  chatPermissions: ChatPermission[];
}

interface RoleState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  roles: EntityState<Role>;
}

const rolesAdapter = createEntityAdapter<Role>({
  selectId: (role) => role.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState: RoleState = {
  loading: "idle",
  roles: rolesAdapter.getInitialState(),
};

const fetchRoles = createAsyncThunk("roles/fetchRoles", async () => {
  const rolesInfo = await fetch("/api/roles");
  const data = (await rolesInfo.json()) as Role[];
  return data;
});

const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<Role>) {
      rolesAdapter.setOne(state.roles, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoles.fulfilled, (state, action) => {
        rolesAdapter.setAll(state.roles, action.payload);
        state.loading = "succeeded";
      })
      .addCase(fetchRoles.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchRoles.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { setRole } = rolesSlice.actions;
export default rolesSlice.reducer;
