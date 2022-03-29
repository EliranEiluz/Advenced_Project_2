import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import {BrowserRouter,Routes, Route,Link } from 'react-router-dom';

class User {
  constructor(username, password, picture) {
    this.username = username;
    this.password = password;
    this.picture = picture;
  }
}

const usersArray = {};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/register' element={<RegisterPage />}></Route>
      <Route path='/' element={<LoginPage />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
,
  document.getElementById('root')
);

