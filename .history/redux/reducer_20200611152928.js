
import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: [
    'Allie',
    'Gator',
    'Lizzie',
    'Reptar',
  ],
};

const friendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  friends: friendReducer,
});

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_SEGGESTION_LIST': {
            return { ...state, ...action.payload }
        }
        case 'SET_CATEGORY_LIST': {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}

export default reducer;