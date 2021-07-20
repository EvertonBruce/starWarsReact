import React from 'react';
import homeImg from '../assets/sw-bg.png'

class Home extends React.Component {
  render() {
    return (
      <div className="main-container">
        <img src={homeImg} alt="main-img"/>
      </div>
    )
  }
}

export default Home;