import React from 'react';
import Menu from './menu.js'
import logo from '../assets/star-wars-logo.png'
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="nav-menu">
          <Menu />
        </div>
      </header>
    )
  }
}

export default Header;