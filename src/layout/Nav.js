//import React from "react";
import { NavLink } from "react-router-dom";

const navs = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/about',
        name: 'About'
    },
    {
        path: '/contact',
        name: 'Contact'
    }
]

const Nav = () => (
        <nav className="bg-white p-7 shadow">
            <ul className="flex space-x-6 justify-end">
                {navs.map((navItem) => (
                    <li>
                        <NavLink exact to={navItem.path} activeClassName="border-b-2 border-purple-400 pb-1">
                            {navItem.name}</NavLink>
                    </li>
                ))} 
            </ul>
        </nav>
);

export default Nav;