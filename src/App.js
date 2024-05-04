/* Utilities */

import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";

/* Components */

import Header from './components/Header/Header.js'
import { store } from './store.js';

/* Pages */

import HomePage from './pages/HomePage.js';
import LobbyPage from './pages/lobby/LobbyPage.js';
import PlayPage from './pages/lobby/PlayPage.js';
import LoginPage from './pages/Login/LoginPage.js';
import ForgotPasswordPage from "./pages/Login/ForgotPasswordPage.js";
import SignUpPage from "./pages/Login/SignUpPage.js";
import TopUpPage from "./pages/TopUpPage.js";
import ForumPage from "./pages/Forum/ForumPage.js";
import ProfilePage from "./pages/Profile/ProfilePage.js";

/* Global Signals */

import { signal } from "@preact/signals-react";
export const navLoginName = signal('login');
export const setNavLoginName = (name = 'login') => navLoginName.value = name;

function App() {
  
  return (
    <Provider 
      store={store}>
      <Header />
      <div className='custom-body flex jcc aic'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/lobby' element={<LobbyPage/>} />
          <Route path='/lobby/play' element={<PlayPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/account-recovery' element={<ForgotPasswordPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/chip-store' element={<TopUpPage />} />
          <Route path='/social' element={<ForumPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
