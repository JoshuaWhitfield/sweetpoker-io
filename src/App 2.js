/* Utilities */

import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";

/* components */

import Header from './components/Header/Header.js'
import { store } from './store.js';

/* pages */

import HomePage from './pages/HomePage.js';
import LobbyPage from './pages/lobby/LobbyPage.js';
import PlayPage from './pages/lobby/PlayPage.js';
import LoginPage from './pages/Login/LoginPage.js';
import ForgotPasswordPage from "./pages/Login/ForgotPasswordPage.js";
import SignUpPage from "./pages/Login/SignUpPage.js";
import TopUpPage from "./pages/TopUpPage.js";
import ForumPage from "./pages/Forum/ForumPage.js";


function App() {
  
  return (
    <Provider 
      store={store}>
      <Header />
      <div className='custom-body flex jcc aic'>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/lobby' element={<LobbyPage/>}></Route>
          <Route path='/lobby/play' element={<PlayPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/account-recovery' element={<ForgotPasswordPage />}></Route>
          <Route path='/signup' element={<SignUpPage />}></Route>
          <Route path='/chip-store' element={<TopUpPage />}></Route>
          <Route path='/social' element={<ForumPage />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
