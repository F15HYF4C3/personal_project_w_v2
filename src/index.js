import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers())

ReactDOM.render(
    <Provider store={store}>
      <Router>
            <App />
      </Router>
    </Provider>, 
    document.getElementById('root'));

