// import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store.jsx';

import App from './App.jsx';
import "bootswatch/dist/solar/bootstrap.min.css";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
