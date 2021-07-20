import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a href="/">PEOPLE</a>
        </li>
        <li>
          <a href="/">PLANETS</a>
        </li>
        <li>
          <a href="/">STARSHIPS</a>
        </li>
        <li>
          <a href="/">VEHICLES</a>
        </li>
        <li>
          <a href="/">FILMS</a>
        </li>
        <li>
          <a href="/">SPECIES</a>
        </li>
      </ul>
    )
  }
}

export default Menu;