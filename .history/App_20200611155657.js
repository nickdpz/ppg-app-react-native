// import React, { Component } from 'react';
// import { Provider } from 'react-redux';// Imports: Screens
// import { store } from './redux/store';
// import AppLayout from './src/app';

// export default class App extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <AppLayout />
//             </Provider>
//         );
//     }
// }

import React from 'react';
import { Provider } from "react-redux"
import { store } from './redux/store';

const App = () => (
  <Provider store={store}>
    <Text>Hola</Text>
  </Provider>
)

export default App;

