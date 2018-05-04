import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadInitialData } from '../actions';
import Home from './Home';
import Footer from './Footer';
import Top from './Top';
import NotFound from './NotFound';
import Category from './Category';
import PostDetails from './PostDetails';
import PostForm from './PostForm';
import Loading from './Loading';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadInitialData());
  }

  render() {
    let { loading } = this.props;
    let content =
      loading ? <Loading loading={loading} />
      : <Switch>
          <Route exact path="/" render={() => (<Home />)} />
          <Route exact path="/:category" render={(props) => (<Category {...props} />)} />
          <Route exact path="/:category/:post" render={(props) => (<PostDetails {...props} />)} />
          <Route exact path="/:category/:post/new-edit" render={(props) => (<PostForm {...props} />)} />
          <Route component={NotFound} />
        </Switch>;

    return (
      <div className="app">
        <Top />
          {content}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ initReducer }) => {
  return initReducer;
}

export default connect(mapStateToProps)(App);
