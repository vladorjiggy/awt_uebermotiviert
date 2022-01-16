import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';

import rootReducer from './reducer/RootReducer'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./layout/css/style.css";
import App from './App';
import reportWebVitals from './reportWebVitals';


const initialState = {
}

const middlewares = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    
  
  <App />

  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();