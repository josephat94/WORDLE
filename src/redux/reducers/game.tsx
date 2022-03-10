import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        text: ""

    },
    reducers: {
        setText: (state, action) => {
            state.text = state.text + action.payload;
        },
    },
})

// Action creators are generated for each case reducer function

export const {
    setText
} = gameSlice.actions

export default gameSlice.reducer;

