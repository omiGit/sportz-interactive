import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createMiddleware from 'redux-saga';
import {put, takeEvery, all} from 'redux-saga/effects';
import players from './reducers/players.reducer'
import {watcher} from './actions/watcher.saga'; 
const sagaMiddleware = createMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({players}), composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watcher);

export default store;