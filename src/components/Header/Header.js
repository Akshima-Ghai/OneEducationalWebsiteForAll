import React, { useState } from "react";
import "./Header.css";
import { Link, withRouter } from "react-router-dom";

import Nav from "./../Nav/Nav";

function ThemeToggleBtn(props) {
  return (
    <label className="header__switch">
      <input type="checkbox" className="toggle__checkbox" />
      <span onClick={props.onClick} className="slider round"></span>
    </label>
  );
}

const Header = (props) => {
  const [isDark, setIsDark] = useState(false);

  const handleThemeBtn = () => {
    let currentTheme = isDark;
    if (currentTheme === true) {
      document.documentElement.dataset.theme = "light";
    } else {
      document.documentElement.dataset.theme = "dark";
    }
    setIsDark((prev) => !prev);
  };

  return (
    <header className="header">
      <div onClick={() => props.history.push("/")}>
        <h1 className="header__h1">
          LEARN
          <label className="header__h1--label">Zania</label>
        </h1>
      </div>
      <ThemeToggleBtn onClick={handleThemeBtn} />
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
