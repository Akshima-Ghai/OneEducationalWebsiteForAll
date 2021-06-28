import React from 'react'
import './Nav.css'

import NavLink from './../UI/NavLink/NavLinks'

export default function Nav(props){
    return (
        <nav className="header__nav">
            <ul className="header__ul">
                <NavLink href="/" >Home</NavLink>
                <NavLink href="/feature" >Feature</NavLink>
                <NavLink href="/about" >About</NavLink>
                <NavLink href="/login" >Login</NavLink>
                <NavLink href="/signup" >Signup</NavLink>
            </ul>
        </nav>
    )
}
