// DUCKS PATTERN

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
};


const initialState: CounterState = {
    value: 0
};


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment
        increment: (state) => {
            // it's ok to do this because immer makes it immutable work under the hood
            // state.value += 1;
            state.value++;
        },

    }
})


export const { increment } = counterSlice.actions;
export default counterSlice.reducer;