import React, {useState} from "react";
import "./Nav.css";
import NavLink from "./../UI/NavLink/NavLinks";

export default function Nav(props) {
    
  return (
    <nav className="header__nav ">
      <ul className="header__ul">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/feature">Courses</NavLink>
        <NavLink href="/feature">Quiz</NavLink>
        <NavLink href="/about">About</NavLink>
      </ul>
    </nav>
  );
}
