import {nanoid, PayloadAction} from "@reduxjs/toolkit";
import { addJoke, deleteJokeById } from "../ducks";


export const myJokesCheckCount = (store: any) => (next: ReturnType<typeof store.dispatch>) => (action: PayloadAction) => {
    if(action.type === addJoke.type) {
        const {myJokes} = store.getState()
        if (myJokes.length === 10) {
            store.dispatch(deleteJokeById(myJokes[0].id));
        }
    }
    return next(action);
}