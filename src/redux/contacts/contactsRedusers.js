import { combineReducers } from 'redux';

const items = (state = [], action) => state;

const filter = (state = '', action) => state;

export default combineReducers({ items, filter });