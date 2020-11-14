import React, {ElementType} from "react";
import {useDispatch} from "react-redux";
import { deleteJokeById } from "../../ducks";

interface WrapperJokeProps {
    children: React.ReactNode,
    idJoke: string
}

export const WrapperJoke: React.FC<WrapperJokeProps> = ({children, idJoke}) => {

    const dispatch = useDispatch();

    const handleDeleteJoke = (): void => {
        dispatch(deleteJokeById(idJoke))
    }

    return (
        <div>
            {children}
            <button onClick={handleDeleteJoke}>Delete joke</button>
        </div>
    )
};