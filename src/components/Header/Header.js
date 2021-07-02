import React, { useState } from "react";
import "./Header.css";
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
    <header className={changeColor? "header active" : "header"}>
      <div onClick={() => props.history.push("/")}>
        <h1 className={changeColor? "header__h1 active" : "header__h1"}>
          LEARN<label className={changeColor? "header__h1--label active" : "header__h1--label"}>Zania</label>
        </h1>
      </div>
      <div onClick={props.toggleSD} className="header_toggle--btn">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Nav />
      <div className="header__btn--container">
        <ul className="header__btn--ul">
          <li className="header__btn--login header__btn--a">
            <Link to="/login" className={changeColor? "scroll_color_change active" : "scroll_color_change"}>Log in</Link>
          </li>
          <li className="header__btn--get header__btn--a">
            <Link to="/guidence">Get Started</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default withRouter(Header);
