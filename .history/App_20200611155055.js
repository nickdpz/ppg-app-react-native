import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';// Imports: Screens
import { store } from './redux/store';
import AppLayout from './src/app';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppLayout />
            </Provider>
        );
    }
}

