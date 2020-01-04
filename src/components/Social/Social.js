import React from 'react';
import {
    FaTelegramPlane,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa';

const Social = () => (
    <ul className="navbar-nav">
      <li className="nav-item">
      <a href="/" className="nav-link">
          <FaTelegramPlane />
      </a>
      </li>
      <li className="nav-item">
      <a href="/" className="nav-link">
          <FaFacebookF />
      </a>
      </li>
      <li className="nav-item">
      <a href="/about" className="nav-link">
          <FaInstagram />
      </a>
      </li>
      <li className="nav-item">
      <a href="/" className="nav-link">
          <FaTwitter />
      </a>
      </li>
      <li className="nav-item">
      <a href="/" className="nav-link">
          <FaYoutube />
      </a>
      </li>
    </ul>
);

export default Social;