import React, { Component } from 'react'

import LoaderImg from '../assets/sp_loader.gif'

export default class LoadAnimation extends Component {
  render() {
    return (
      <div className="load-animation">
        <img src={LoaderImg} alt="loading..." />
        <h2>Page Loading...Please Wait</h2>
      </div>
    )
  }
}