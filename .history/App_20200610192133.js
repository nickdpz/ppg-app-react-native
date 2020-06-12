import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider
                store={store}
            >
                <Home>
                    <Header />
                    <Text>buscador</Text>
                </Home>
            </Provider>
        );
    }
}