import React, {ElementType} from "react";
import {useDispatch} from "react-redux";
import { deleteJokeById } from "../../ducks";
import {Button} from "../../UI/Button";

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
            <Button onClick={handleDeleteJoke}>Delete joke</Button>
        </div>
    )
};