import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {JokesI, RootStateI} from "../../interfaces/interfaces";


const initialState: Array<JokesI> = [];

const myJokesSlice = createSlice({
        name: 'myJokes',
        initialState,
        reducers: {
            addJoke: (state, action: PayloadAction<JokesI>) => {
                state.push(action.payload);
            },
            deleteJoke: (state) => {
                state.pop();
            },
            deleteJokeById: (state, action: PayloadAction<string>) => {
                const indJoke = state.findIndex( joke => joke.id === action.payload);
                state.splice(indJoke,1);
            },
        },

    }
);

export const selectMyJokes = (state: RootStateI) => state.myJokes
export const selectMyJokesById = (state: RootStateI, jokeId: string) => state.myJokes.find(joke => joke.id === jokeId);

export const {addJoke, deleteJoke, deleteJokeById} = myJokesSlice.actions;
export const myJokesReducer = myJokesSlice.reducer;

