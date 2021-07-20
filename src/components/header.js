import React from 'react';
import Menu from './menu.js'
import logo from '../assets/star-wars-logo.png'

class Header extends React.Component {
  render() {
    return (
      <header>
        <a className="logo-link" href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="nav-menu">
          <Menu />
        </div>
      </header>
    )
  }
}

export default Header;