import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadInitialData } from '../../actions/PostActions';
import { loadCategories } from '../../actions/CategoryActions';
import Home from '../Home/Home';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';
import Top from '../Top/Top';
import PostDetails from '../PostDetails/PostDetails';
import AddPost from '../AddPost/AddPost';
import EditPost from '../EditPost/EditPost';
import NotFound from '../NotFound/NotFound';
import Loading from '../Loading/Loading';
import './App.css';

class App extends Component {
  /**
  * @description Loads initial data and categories
  */
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadInitialData());
    dispatch(loadCategories());
  }

  render() {
    const { loading } = this.props;
    let content =
      loading ? <Loading loading={loading} />
        : (
          <Switch>
            <Route exact path="/" render={(props) => (<Home {...props} />)} />
            <Route exact path="/post/new" render={(props) => (<AddPost {...props} />)} />
            <Route exact path="/:category" render={(props) => (<Category {...props} />)} />
            <Route exact path="/:category/:post" render={(props) => (<PostDetails {...props} />)} />
            <Route exact path="/:category/:post/edit" render={(props) => (<EditPost {...props} />)} />
            <Route component={NotFound} />
          </Switch>
        );
    return (
      <div className="app">
        <Top />
        { content }
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ categoryReducer }) => {
  return categoryReducer;
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps)(App));
