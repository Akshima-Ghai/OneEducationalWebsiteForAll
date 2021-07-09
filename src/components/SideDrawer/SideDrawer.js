import React from "react";
import ReactDOM from "react-dom";
import "./SideDrawer.css";

import NavLink from "./../UI/NavLink/NavLinks";

const SideDrawer = (props) => {
  const Drawer = (
    <nav
      style={{
        transform: props.showSD ? "translateX(0)" : "translateX(-120%)",
      }}
      className="sidedrawer__container"
    >
      <ul onClick={props.toggleSD}>
        <NavLink sd={true} href="/section">
          Get Started
        </NavLink>
        <NavLink sd={true} href="/Feature_Student">
          Feature
        </NavLink>
        <NavLink sd={true} href="/about">
          About
        </NavLink>
        <NavLink sd={true} href="/login">
          Login
        </NavLink>
        <NavLink sd={true} href="/signup">
          Signup
        </NavLink>

        <NavLink sd={true} href="/faq">
          FAQ
        </NavLink>
      </ul>
    </nav>
  );

  return ReactDOM.createPortal(Drawer, document.getElementById("sd"));
};

export default SideDrawer;
