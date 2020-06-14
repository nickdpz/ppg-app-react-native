import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    userName:null,
    userAge:null,
    initialRoute:'Register'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, userName: action.payload.userName, userAge: action.payload.userAge}
    }
    return state
}

const store = createStore(reducer);

export default store;