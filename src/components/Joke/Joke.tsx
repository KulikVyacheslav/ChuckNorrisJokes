import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getJoke, selectJoke} from "../../ducks";

interface JokeProps {
    
}

export const Joke: React.FC<JokeProps> = () => {

    const dispatch = useDispatch();
    const joke = useSelector(selectJoke);

    useEffect(() => {
        if(!joke.hasOwnProperty('value')) {
            dispatch(getJoke());
        }
    });


    
    return (<div>
        <p>{joke.value}</p>
    </div>)
}