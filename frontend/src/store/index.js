import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { initReducer } from '../reducers';

const reducers = combineReducers({ initReducer });

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
