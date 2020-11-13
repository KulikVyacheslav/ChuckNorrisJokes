import React, {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getJoke, selectJoke, addJoke, deleteJoke, selectMyJokes, selectMyJokesById, deleteJokeById} from "../../ducks";
import {Joke} from "../../components/Joke";
import {JokesI, RootStateI} from "../../interfaces/interfaces";

interface JokesProps {

}

export const Jokes: React.FC<JokesProps> = () => {

    const dispatch = useDispatch();
    let timerForJoke = useRef<ReturnType<typeof setInterval>>();

    const joke = useSelector(selectJoke);
    const jokeInFavorite: JokesI | undefined = useSelector((state: RootStateI) => selectMyJokesById(state, joke.id));
    const initialStateTBF: boolean = !!jokeInFavorite;

    const  [toggleButtonFavorite, setToggleButtonFavorite] =  useState<boolean>(initialStateTBF);
    const  [toggleButtonTimer, setToggleButtonTimer] =  useState<boolean>(false);

    useEffect(() => {
        setToggleButtonFavorite(initialStateTBF)
    }, [joke])

    const handleStartGetJoke = useCallback((): void => {
        setToggleButtonTimer(true);
        timerForJoke.current = setInterval(() => {
            dispatch(getJoke());
        }, 3000);
    }, [dispatch]);

    const handleStopGetJoke = useCallback((): void => {
        setToggleButtonTimer(false);
        clearInterval(timerForJoke.current!);
    }, []);

    const handleFavorite = (): void => {
        if (toggleButtonFavorite) {
            dispatch(deleteJokeById(joke.id));
            setToggleButtonFavorite(false);
        } else {
            dispatch(addJoke(joke));
            setToggleButtonFavorite(true);
        }

    }
    return (
        <div>
            <Joke />
            <button onClick={() => dispatch(getJoke())}>Get new Joke</button>
            {toggleButtonTimer ?
                <button onClick={handleStopGetJoke}>Stop Get Joke</button> :
                <button onClick={handleStartGetJoke}>Get new Joke 3sec</button>
            }
            {toggleButtonFavorite ?
                <button onClick={handleFavorite}>Delete from Favorite</button> :
                <button onClick={handleFavorite}>Add to Favorite</button>
            }

        </div>
    )
}