import React, {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getJoke, selectJoke, addJoke, selectMyJokesById, deleteJokeById} from "../../ducks";
import {Joke} from "../../components/Joke";
import {JokesI, RootStateI} from "../../interfaces/interfaces";
import {Button} from "../../UI/Button";
import "./Jokes.scss";

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
    }, [joke, initialStateTBF])

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

    const handleFavorite = useCallback((): void => {
        if (toggleButtonFavorite) {
            dispatch(deleteJokeById(joke.id));
            setToggleButtonFavorite(false);
        } else {
            dispatch(addJoke(joke));
            setToggleButtonFavorite(true);
        }

    }, [dispatch, joke, toggleButtonFavorite]);

    return (
        <div className="container jokes">
            <Joke />
            <div className="jokes_button">
                <Button color="info" onClick={() => dispatch(getJoke())}>Get new Joke</Button>
                {toggleButtonTimer ?
                    <Button onClick={handleStopGetJoke}>Stop Get Joke</Button> :
                    <Button color="info" onClick={handleStartGetJoke}>Get new Joke 3sec</Button>
                }
                {toggleButtonFavorite ?
                    <Button onClick={handleFavorite}>Delete from Favorite</Button> :
                    <Button color="secondary" onClick={handleFavorite}>Add to Favorite</Button>
                }
            </div>
        </div>
    )
}