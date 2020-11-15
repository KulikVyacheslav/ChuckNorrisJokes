import React, {ElementType} from "react";
import {useDispatch} from "react-redux";
import { deleteJokeById } from "../../ducks";
import {Button} from "../../UI/Button";

interface WrapperJokeProps {
    children: React.ReactNode,
    idJoke: string,
    className?: string
}

export const WrapperJoke: React.FC<WrapperJokeProps> = ({children, idJoke, className}) => {

    const dispatch = useDispatch();

    const handleDeleteJoke = (): void => {
        dispatch(deleteJokeById(idJoke))
    }

    return (
        <div className={className}>
            {children}
            <Button onClick={handleDeleteJoke}>Delete joke</Button>
        </div>
    )
};