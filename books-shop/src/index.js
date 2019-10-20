import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from '../src/containers/App';
import createStore from './store';
import 'semantic-ui-css/semantic.min.css';

import '../src/App.css';

const store = createStore();
 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
                
, document.getElementById('root'));


