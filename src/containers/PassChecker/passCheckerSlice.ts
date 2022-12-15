import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
  digits: number[];
  result: number[];
}

const initialState: CounterState = {
  digits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  result: [],
};

export const passCheckerSlice = createSlice({
  name: 'passChecker',
  initialState,
  reducers: {
    result: (state, action: PayloadAction<number>) => {
     state.result.push(state.digits[action.payload]);
    },
    remove: (state) => {
      state.result.pop();
    }
  }
});

export const passCheckerReducer = passCheckerSlice.reducer;
export const {result, remove} = passCheckerSlice.actions;