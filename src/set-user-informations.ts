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

export const userInformations = createSlice({
  name: "userInformations",
  initialState,
  reducers: {
    setUserInformations: (
      state,
      actions: PayloadAction<{ user: User | null; isAdmin: boolean }>
    ) => {
      state.user = actions.payload.user;
      state.isAdmin = actions.payload.isAdmin;
    },
  },
});

export const { setUserInformations } = userInformations.actions;

export default userInformations.reducer;
