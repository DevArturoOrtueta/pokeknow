import { createSlice } from "@reduxjs/toolkit";

export const scrollSlice = createSlice({
    name: 'scroll',
    initialState: {
        heightScroll: 0,
        actualScroll: 0,
    },
    reducers: {
        storeScroll: (state, action) => {
            const {heightScroll, actualScroll} = action.payload;
            state.heightScroll = heightScroll;
            state.actualScroll = actualScroll
        }
    }
})

export const {storeScroll} = scrollSlice.actions;
export default scrollSlice.reducer;
