import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";

export interface UserState {
  user: User | null;
  isAdmin: boolean;
}

const initialState: UserState = {
  user: null,
  isAdmin: false,
};

export const UserSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInformations: (
      state,
      actions: PayloadAction<UserState>
    ) => {
      state.user = actions.payload.user;
      state.isAdmin = actions.payload.isAdmin;
    },
  },
});

export const { setUserInformations } = UserSlice.actions;

export default UserSlice.reducer;
