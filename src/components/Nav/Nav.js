import React from "react";
import "./Nav.css";

import NavLink from "./../UI/NavLink/NavLinks";

export default function Nav(props) {
  return (
    <nav className="header__nav">
      <ul className="header__ul">
        <NavLink href="/section">Get Started</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/quiz">Quiz</NavLink>
        <NavLink href="/lecture">Videos</NavLink>
        <NavLink href="/blogs">Blogs</NavLink>
        <NavLink href="/student">Students</NavLink>
        <NavLink href="/teacher">Teachers</NavLink>
        {/* <NavLink href="/guidance">Guidance</NavLink> 
         <NavLink href="/Feature_Teacher">Features</NavLink>
        */}
        
        <NavLink href="/faq">F.A.Q.</NavLink>
      </ul>
    </nav>
  );
}
