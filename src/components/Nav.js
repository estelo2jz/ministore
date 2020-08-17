import React, { Component } from 'react';
import '../styles/nav.scss';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-container" >
        <div className="nav-nav-title">
          <div>
            <h2>Mini Store</h2>
          </div>
        </div>
        <div className="nav-nav-container">
          <div>
            <NavLink to="/home"><p>Home</p></NavLink>
          </div>
          <div>
            <NavLink to="/"><p>Store</p></NavLink>
          </div>
          <div>
            <NavLink to="/about">About</NavLink>
          </div>          
          <div>
            <a href="/#"><p>Services</p></a>
          </div>          
          <div>
            <a href="/#"><p>Contact</p></a>
          </div>
        </div>
      </div>
    )
  }
}
