import React from 'react'
import './Header.css'

import Nav from './../Nav/Nav'

const Header = (props) => {
  return (
    <header className="header">
      <div>
        <h1 className="header__h1">
          Education<label className="header__h1--label">Website</label>
        </h1>
      </div>
      <div onClick={props.toggleSD} className="header_toggle--btn">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Nav />
    </header>
  )
}

export default Header
