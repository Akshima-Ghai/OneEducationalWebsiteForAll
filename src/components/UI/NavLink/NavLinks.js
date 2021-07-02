import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinks.css'

export default function NavLinks(props) {
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
    
    <li className="header__nav--li">
      <NavLink className={changeColor? "nav_scroll_color_change ac" : "nav_scroll_color_change"} to={`${props.href}`} exact={true}>
        {props.children}
      </NavLink>
    </li>
   
  )
}
