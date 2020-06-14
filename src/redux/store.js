import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    counter: 0,
    user:''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload.user}
    }
    return state
}

const store = createStore(reducer);

export default store;