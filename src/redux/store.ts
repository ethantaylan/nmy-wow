import { configureStore } from "@reduxjs/toolkit";
import setUserInformations from "./user";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import isApplicationReady from "./application";

export const store = configureStore({
  reducer: {
    user: setUserInformations,
    app: isApplicationReady,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
