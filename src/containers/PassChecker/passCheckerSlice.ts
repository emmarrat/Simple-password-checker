import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
  digits: number[];
  result: number[];
  checker: boolean | null;
}

const initialState: CounterState = {
  digits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  result: [],
  checker: null,
};

const correctPass = '1234';

export const passCheckerSlice = createSlice({
  name: 'passChecker',
  initialState,
  reducers: {
    result: (state, action: PayloadAction<number>) => {
      if(state.result.length < 4) {
        state.result.push(state.digits[action.payload]);
      }
    },
    remove: (state) => {
      state.result.pop();
      state.checker = null;
    },
    checkResult: (state) => {
      const finalResult = state.result.join('');
      state.checker = finalResult === correctPass;
    },
  }
});

export const passCheckerReducer = passCheckerSlice.reducer;
export const {result, remove, checkResult} = passCheckerSlice.actions;