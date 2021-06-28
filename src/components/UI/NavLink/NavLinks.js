import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinks.css'

export default function NavLinks(props) {
  return (
    <li className="header__nav--li">
      <NavLink to={`${props.href}`} exact={true}>
        {props.children}
      </NavLink>
    </li>
  )
}
