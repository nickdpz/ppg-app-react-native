import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const initialState = {
    counter: 0,
    user:"nico"
}
import AppLayout from './src/app';
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: state.counter + 1 }
        case 'DECREASE_COUNTER':
            return { counter: state.counter - 1 }
    }
    return state
}


const store = createStore(reducer)

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppLayout />
            </Provider>
        );
    }
}

export default App