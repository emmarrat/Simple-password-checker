import {configureStore} from "@reduxjs/toolkit";
import {passCheckerReducer} from "../containers/PassChecker/passCheckerSlice";

export const store = configureStore({
  reducer: {
    passChecker: passCheckerReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;