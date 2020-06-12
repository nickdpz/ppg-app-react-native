import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Provider } from 'react-redux'

import AppLayout from './src/app';
import store from './src/redux/store'

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