//import createStore and applyMiddleware for creating our store and enhancing our dispatcher
import { createStore, applyMiddleware, combineReducers} from 'redux';
//import thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk';
//import reducer from our reducer file
import reducer from './reducer';

const store = createStore(combineReducers({reducer}), applyMiddleware(thunk));

export default store;