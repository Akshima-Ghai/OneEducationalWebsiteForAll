import React from 'react'
import './Header.css'
import { Link,withRouter } from 'react-router-dom'

import Nav from './../Nav/Nav'

const Header = (props) => {
  return (
    <header className="header">
      <div onClick={() => props.history.push("/")}>
        <h1 className="header__h1">
          Educa<label className="header__h1--label">tion</label>
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
          <li className="header__btn--login header__btn--a"><Link to="/login">Log in</Link></li>
          <li className="header__btn--get header__btn--a"><Link to="/guidence">Get Started</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default withRouter(Header)
