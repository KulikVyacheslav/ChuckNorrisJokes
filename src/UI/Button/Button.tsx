import React from "react";
import './Button.scss';
import classNames from "classnames";

interface ButtonProps {
    children: string,
    onClick: () => void,
    className?: string,
    color?: 'primary' | 'secondary' | 'info'
}

export const Button: React.FC<ButtonProps> = ({children, onClick, className, color= 'primary'}) => {

    const btnClass = classNames('button', className, `button__${color}`);

    return (
        <button className={btnClass} onClick={onClick}>{children}</button>
    )
};