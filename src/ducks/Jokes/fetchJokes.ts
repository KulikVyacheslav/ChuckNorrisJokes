import {createAsyncThunk} from "@reduxjs/toolkit";

export const getJoke = createAsyncThunk(
    'jokes/getJoke',
    async () => {
        const response = await fetch(`https://api.chucknorris.io/jokes/random`);
        if (response.ok) {
            return await response.json();
        } else {
            return response.statusText;
        }
    }
);