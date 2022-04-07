import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ChatPage from './ChatPage';
import Contact from './Contact';

import {BrowserRouter,Routes, Route } from 'react-router-dom';


class User {
  constructor(username, password,displayName, picture) {
    this.username = username;
    this.displayName = displayName;
    this.password = password;
    this.picture = picture;
    this.chats = [];
  }
}

class Message {
  constructor(from,messageContent,messageType) {
    this.from = from;
    this.messageContent = messageContent;
    this.messageType = messageType;
  }
}

class Chat {
  constructor(displayName, image) {
    this.displayName = displayName;
    this.image = image;
    this.messages = [];
  }
}


const UsersArray = [new User('wow','wowwowwow','wow','im4.jpeg')];
const nowOnline = {onlineUser:null};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/contact' element={<Contact nowOnline={nowOnline}/>}></Route>
      <Route exact path='/chat' element={<ChatPage nowOnline={nowOnline}/>}></Route>
      <Route exact path='/register' element={<RegisterPage UsersArray={UsersArray} nowOnline={nowOnline}/>}></Route>
      <Route path='/' element={<LoginPage UsersArray={UsersArray} nowOnline={nowOnline}/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
,
  document.getElementById('root')
);

export default User;

