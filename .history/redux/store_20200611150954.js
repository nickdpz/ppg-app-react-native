//import createStore and applyMiddleware for creating our store and enhancing our dispatcher
import { createStore, applyMiddleware } from 'redux';
//import thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk';
//import reducer from our reducer file
import reducer from './reducer';

const initialState = {
    suggestionList: [],
    categoryList: [],
    user: undefined,
}

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;