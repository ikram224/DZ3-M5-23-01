import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul style={{display: 'flex', width: 500, justifyContent: "space-between", margin: '0 auto'}}>
                <li style={{listStyle: 'none'}}>
                    <NavLink to='/'>post</NavLink>
                </li>
                <li style={{listStyle: 'none'}}>
                    <NavLink to='delete'>delete</NavLink>
                </li>
                <li style={{listStyle: 'none'}}>
                    <NavLink to='edit'>edit</NavLink>
                </li>
                <li style={{listStyle: 'none'}}>
                    <NavLink to='create'>create</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;