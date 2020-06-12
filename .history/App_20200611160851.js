import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppLayout from './src/app';

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={store}>
                <AppLayout />
            </Provider>
        )
    }
}
