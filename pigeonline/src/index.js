import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ChatPage from './ChatPage';
import Contact from './Contact';

import {BrowserRouter,Routes, Route,Link } from 'react-router-dom';


class User {
  constructor(username, password,displayName, picture) {
    this.username = username;
    this.displayName = displayName;
    this.password = password;
    this.picture = picture;
  }
}

const UsersArray = [new User('wow','wowwowwow','wow','im4.jpeg')];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/contact' element={<Contact />}></Route>
      <Route exact path='/chat' element={<ChatPage />}></Route>
      <Route exact path='/register' element={<RegisterPage UsersArray={UsersArray}/>}></Route>
      <Route path='/' element={<LoginPage UsersArray={UsersArray}/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
,
  document.getElementById('root')
);

