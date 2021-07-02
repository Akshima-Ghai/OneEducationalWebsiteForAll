import React from "react";
import "./Nav.css";

import NavLink from "./../UI/NavLink/NavLinks";

export default function Nav(props) {
  return (
    <nav className="header__nav">
      <ul className="header__ul">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/courses">Courses</NavLink>
        <NavLink href="/Quiz">Quiz</NavLink>
        <NavLink href="/guidance">Guidance</NavLink>
        <NavLink href="/faq">FAQ</NavLink>
      </ul>
    </nav>
  );
}
