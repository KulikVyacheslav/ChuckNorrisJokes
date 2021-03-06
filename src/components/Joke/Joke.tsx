import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getJoke, selectJoke} from "../../ducks";
import "./Joke.scss";

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


    
    return (<div className="joke">
        <p>{joke.value}</p>
    </div>)
}