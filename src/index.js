import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';

const baseState = [
    { id: '0', text: 'h' },
    { id: '1', text: 'e' },
    { id: '2', text: 'l' },
    { id: '3', text: 'l' },
    { id: '4', text: 'o' }
];

const store = configureStore(baseState);

ReactDOM.render((
    <Provider store={ store }>
        <App />
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
