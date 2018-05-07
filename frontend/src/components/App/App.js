import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadInitialData } from '../../actions/PostActions';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Top from '../Top/Top';
import NotFound from '../NotFound/NotFound';
import PostDetails from '../PostDetails/PostDetails';
import AddPost from '../AddPost/AddPost';
import EditPost from '../EditPost/EditPost';
import Loading from '../Loading/Loading';
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
          <Route exact path="/" render={(props) => (<Home {...props} />)} />
          <Route exact path="/post/new" render={(props) => (<AddPost {...props} />)} />
          <Route exact path="/:category" render={(props) => (<Home {...props} />)} />
          <Route exact path="/:category/:post" render={(props) => (<PostDetails {...props} />)} />
          <Route exact path="/:category/:post/edit" render={(props) => (<EditPost {...props} />)} />
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

const mapStateToProps = ({ postReducer }) => {
  return postReducer;
}

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/redux.md
export default withRouter(connect(mapStateToProps)(App));
