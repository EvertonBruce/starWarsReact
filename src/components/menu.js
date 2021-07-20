import React from 'react';
import { NavLink } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/people">PEOPLE</NavLink>
        </li>
        <li>
          <NavLink to="/planets">PLANETS</NavLink>
        </li>
        <li>
          <NavLink to="/starships">STARSHIPS</NavLink>
        </li>
        <li>
          <NavLink to="/vehicles">VEHICLES</NavLink>
        </li>
        <li>
          <NavLink to="/films">FILMS</NavLink>
        </li>
        <li>
          <NavLink to="/species">SPECIES</NavLink>
        </li>
      </ul>
    )
  }
}

export default Menu;