
import { combineReducers } from 'redux';

const INITIAL_STATE = {
    suggestionList: [],
    categoryList: [],
    user: undefined,
};

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