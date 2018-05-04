import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import Footer from './Footer';
import Top from './Top';
import NotFound from './NotFound';
import Category from './Category';
import PostDetails from './PostDetails';
import PostForm from './PostForm';
import './App.css';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Top />
            <Switch>
              <Route exact path="/" render={() => (<Home />)}/>
              <Route exact path="/:category" render={(props) => (<Category {...props} />)} />
              <Route exact path="/:category/:post" render={(props) => (<PostDetails {...props} />)} />
              <Route exact path="/:category/:post/new-edit" render={(props) => (<PostForm {...props} />)} />
              <Route component={NotFound} />
            </Switch>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
