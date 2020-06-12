import { createStore } from 'redux';
import reducer from './reducers/videos';
import storage from 'redux-persist/lib/storage';

const store = createStore(reducer, {
  suggestionList: [],
  categoryList: [],
})



export { store };