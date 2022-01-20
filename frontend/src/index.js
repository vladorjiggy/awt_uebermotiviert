import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react'
import rootReducer from './reducer/RootReducer'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./layout/css/styles.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

const persistConfig = {
  key: 'root',
  storage,
}

const initialState = {
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [thunk];

const store = createStore(persistedReducer, initialState, applyMiddleware(...middlewares));
const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
  
  

  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();