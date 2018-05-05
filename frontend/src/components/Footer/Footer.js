import React from 'react';
import ReactLogo from '../../assets/imgs/logo.svg';
import './Footer.css';

const Footer = () => (
  <footer>
    <p>made with <img className="react-logo" src={ReactLogo} alt="React Logo" title="React" /> by <a href="https://calaca.github.io">calaca</a></p>
  </footer>
);

export default Footer;
