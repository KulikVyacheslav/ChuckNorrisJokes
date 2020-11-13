import React from "react";
import {NavLink} from 'react-router-dom';

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = () => {

    return (
        <div>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/jokes'>Jokes</NavLink>
            <NavLink to='/myjokes'>My Favorite Jokes</NavLink>
        </div>
    )
}