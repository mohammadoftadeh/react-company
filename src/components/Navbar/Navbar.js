import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Social from '../Social/Social';

import './Navbar.scss';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">M.O</Link>
  <button className="navbar-toggler" type="button">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/blog" activeClassName="active" className="nav-link">Blog</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
      </li>
    </ul>
    <Social />
  </div>
</nav>
);

export default Navbar;