import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux Setup
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducers from './reducers';
import {Provider} from 'react-redux';
import {thunk} from 'redux-thunk';

import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancer(applyMiddleware(thunk))
  );

  const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/game-website">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
