import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import counterReducer from './store/reducer/counterReducer'
import { Provider  } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

const x = createStore(counterReducer);
ReactDOM.render(
   <Provider store={x}>
   <App />
   </Provider>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();