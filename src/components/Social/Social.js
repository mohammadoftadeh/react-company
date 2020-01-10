import React from 'react';
import {
    FaTelegramPlane,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa';

import './Social.scss';

const Social = ({ customClass }) => (
    <ul className="navbar-nav">
      <li className="nav-item">
      <a href="/" className={`nav-link ${customClass ? customClass : ''}`}>
          <FaTelegramPlane />
      </a>
      </li>
      <li className="nav-item">
      <a href="/" className={`nav-link ${customClass ? customClass : ''}`}>
          <FaFacebookF />
      </a>
      </li>
      <li className="nav-item">
      <a href="/about" className={`nav-link ${customClass ? customClass : ''}`}>
          <FaInstagram />
      </a>
      </li>
      <li className="nav-item">
      <a href="/" className={`nav-link ${customClass ? customClass : ''}`}>
          <FaTwitter />
      </a>
      </li>
      <li className="nav-item">
      <a href="/" className={`nav-link ${customClass ? customClass : ''}`}>
          <FaYoutube />
      </a>
      </li>
    </ul>
);

export default Social;