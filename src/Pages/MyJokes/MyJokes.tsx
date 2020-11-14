import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectMyJokes, deleteAllJoke} from "../../ducks";
import {WrapperJoke} from "../../components/WrapperJoke";
import { Button } from "../../UI/Button";

interface MyJokesProps {

}

export const MyJokes: React.FC<MyJokesProps> = () => {

    const myJokes = useSelector(selectMyJokes);
    const dispatch = useDispatch();

    const handleDeleteAll = ():void => {
        dispatch(deleteAllJoke());
    }

    return (
        <div>
            {myJokes.map( joke => <WrapperJoke key={joke.id} idJoke={joke.id}><p>{joke.value}</p></WrapperJoke>  )}
            <Button color="primary" onClick={handleDeleteAll}>Delete all Joke</Button>
        </div>
    )
}