import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ApplicationSliceState {
  isApplicationReady: boolean;
}

const initialState: ApplicationSliceState = {
  isApplicationReady: false,
};


export const ApplicationSlice = createSlice({
  name: "ApplicationSlice",
  initialState,
  reducers: {
    isApplicationReady: (state, actions: PayloadAction<ApplicationSliceState>) => {
      state.isApplicationReady = actions.payload.isApplicationReady;
    },
  },
});

export const { isApplicationReady } = ApplicationSlice.actions;

export default ApplicationSlice.reducer;
