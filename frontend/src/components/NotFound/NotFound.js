import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../../assets/imgs/arrow.svg';
import './NotFound.css';

const NotFound = () =>
  <section className="not-found">
    <div className="wrapper">
      <Link to="/">
        <img src={Arrow} alt="Arrow to the left side"/>
        <span>
          Back to Home
        </span>
      </Link>
      <div className="text">
        <span>Error</span>
        <span className="number">
          404
        </span>
        <span>Not Found</span>
      </div>
    </div>
  </section>;

export default NotFound;
