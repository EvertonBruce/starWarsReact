import React from 'react';
import Menu from './Menu.jsx'
import logo from '../assets/star-wars-logo.png'
import { NavLink } from "react-router-dom";
import toggleMenu from '../services/ToggleMenu.js';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo-wrapper">
          <NavLink to="/" className="logo-link">
            <img src={logo} alt="logo" />
          </NavLink>
          <button className="icon" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div className="nav-menu">
          <Menu />
        </div>
      </header>
    )
  }
}

export default Header;