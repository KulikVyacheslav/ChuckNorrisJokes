import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectMyJokes, deleteAllJoke} from "../../ducks";
import {WrapperJoke} from "../../components/WrapperJoke";
import { Button } from "../../UI/Button";
import  "./MyJokes.scss";

interface MyJokesProps {

}

export const MyJokes: React.FC<MyJokesProps> = () => {

    const myJokes = useSelector(selectMyJokes);
    const dispatch = useDispatch();

    const handleDeleteAll = useCallback(():void => {
        dispatch(deleteAllJoke());
    }, [dispatch])

    return (
        <div className="container my-jokes">
            <div className="my-jokes_delete my-jokes__mtb">
                <Button color="primary" onClick={handleDeleteAll}>Delete all Joke</Button>
            </div>
            <div className="my-jokes_content">
                {myJokes.map( joke => <WrapperJoke className="my-jokes_joke" key={joke.id} idJoke={joke.id}><p>{joke.value}</p></WrapperJoke>  )}
            </div>

        </div>
    )
}