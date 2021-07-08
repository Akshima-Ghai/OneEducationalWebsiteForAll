import React, { useState } from "react";
import "./Header.css";
import ImgSrc from "./../../shared/ImgSrc";
import { Link, withRouter } from "react-router-dom";

import Nav from "./../Nav/Nav";

const Header = (props) => {
  const [changeColor, setChangeColor] = useState(false);
  const ChangeNavColor = () => {
    if (window.scrollY > 70) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  window.addEventListener("scroll", ChangeNavColor);
  return (
    <header className="header">
      <div onClick={() => props.history.push("/")}>
        {/* <h1 className="header__h1">
          LEARN
          <label className="header__h1--label">Zania</label>
        </h1> */}
        <img
            src={ImgSrc.Logo}
            alt="logo"
            className="header__logo"
        />

      </div>
      <div onClick={props.toggleSD} className="header_toggle--btn">
        {/* for responsiveness in small screen  */}
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Nav />
      <div className="header__btn--container">
        <ul className="header__btn--ul">
          <li className="header__btn--login header__btn--a">
            <Link to="/login" className="scroll_color_change">
              Login
            </Link>
          </li>
          <li className="header__btn--get header__btn--a">
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default withRouter(Header);
