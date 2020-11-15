import React from "react";
import {NavLink} from 'react-router-dom';
import "./Navbar.scss";
import logoIcon from "./chnicon.png";

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = () => {

    return (
        <>

            <ul className="navbar">
                <NavLink to='/jokes'><img src={logoIcon} alt="logo" className="navbar_logo"/></NavLink>
                <li className="navbar_item"><NavLink activeClassName="navbar_item__active" to='/jokes'>Jokes</NavLink></li>
                <li className="navbar_item"><NavLink activeClassName="navbar_item__active" to='/myjokes'>My Favorite Jokes</NavLink></li>
            </ul>
        </>
    )
}