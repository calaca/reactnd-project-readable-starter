import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { postReducer } from '../reducers/PostReducer';
import { categoryReducer } from '../reducers/CategoryReducer';
import { commentReducer } from '../reducers/CommentReducer';
import { appReducer } from '../reducers/AppReducer';

const reducers = combineReducers({ postReducer, categoryReducer, commentReducer, appReducer });

const middlewares = process.env.NODE_ENV === 'development' ?
  applyMiddleware(logger, thunk) :
  applyMiddleware(thunk);

const Store = createStore(
  reducers,
  compose(
    middlewares,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default Store;
