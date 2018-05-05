import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { postReducer } from '../reducers/PostReducer';
import { categoryReducer } from '../reducers/CategoryReducer';

const reducers = combineReducers({ postReducer, categoryReducer });

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
