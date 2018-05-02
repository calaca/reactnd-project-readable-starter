import React, { Component } from 'react';
import Footer from './Footer';
import Top from './Top';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Top />
        
        <Footer />
      </div>
    );
  }
}

export default App;
