import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    counter: 0,
    user:"nico"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: state.counter + 1 }
        case 'DECREASE_COUNTER':
            return { counter: state.counter - 1 }
    }
    return state
}

const store = createStore(reducer);

export default store;