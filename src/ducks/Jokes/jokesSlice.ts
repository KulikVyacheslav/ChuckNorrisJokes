import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {JokesI, JokesStateI, RootStateI} from "../../interfaces/interfaces";
import {getJoke} from "./fetchJokes";


const initialState: JokesStateI = {
    joke: {} as JokesI,
    loading: false,
    error: {}
}

const jokesSlice = createSlice({
        name: 'jokes',
        initialState,
        reducers: {},
        extraReducers: {
            [getJoke.pending.type]: (state, action: PayloadAction) => {
                state.loading = true;
            },
            [getJoke.fulfilled.type]: (state, action: PayloadAction<JokesI>) => {
                state.loading = true;
                state.joke = action.payload;
            },
            [getJoke.rejected.type]: (state, action) => {
                state.loading = false;
                state.error = action.error;
            }
        }
    }
);


export const selectJoke = (state: RootStateI) => state.jokes.joke

//export const {} = jokesSlice.actions;
export const jokesReducer = jokesSlice.reducer;

