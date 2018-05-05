import React from 'react';
import { Link } from 'react-router-dom';
import './Top.css';

const Top = () => (
  <header className="top">
    <h1><Link to='/'>Readable</Link></h1>
  </header>
)

export default Top;
