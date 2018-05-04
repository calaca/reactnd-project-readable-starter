import { createStore, combineReducers } from 'redux';
import { testReducer } from '../reducers';

const reducers = combineReducers({ testReducer });
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
