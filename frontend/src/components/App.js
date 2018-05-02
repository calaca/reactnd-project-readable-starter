import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Top from './Top';
import NotFound from './NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Top />
          <Switch>
            <Route exact path="/" render={() => (<Home />)}/>
            <Route path="/category" />
            <Route path="/category/post" />
            <Route component={NotFound} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
