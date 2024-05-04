import React from 'react';
import { createRoot } from 'react-dom/client';
//import { Provider } from 'react-redux';
//import store from './store';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

/* css */

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.scss'
import './css/play-room.scss'
import './css/top-up.scss'
import './css/page.scss'
import './css/lobby/lobby.scss'


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <React.StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
  </>
);

reportWebVitals();
