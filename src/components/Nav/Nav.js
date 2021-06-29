import React from 'react'
import './Nav.css'

import NavLink from './../UI/NavLink/NavLinks'

export default function Nav(props){
    return (
        <nav className="header__nav">
            <ul className="header__ul">
                <NavLink href="/about" >About</NavLink>
                <NavLink href="/feature" >Courses</NavLink>
                <NavLink href="/feature" >Quiz</NavLink>
                <NavLink href="/feature" >Guidance</NavLink>
            </ul>
        </nav>
    )
}
