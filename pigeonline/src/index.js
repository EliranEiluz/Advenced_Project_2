import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ChatPage from './ChatPage';
import Contact from './Contact';

import {BrowserRouter,Routes, Route } from 'react-router-dom';


class User {
  constructor(username, password, displayName, picture) {
    this.username = username;
    this.displayName = displayName;
    this.password = password;
    this.picture = picture;
    this.chats = [];
  }
}

class MessageClass {
  constructor(from, messageContent, messageType, messageDate ,senderPicture) {
    this.from = from;
    this.messageContent = messageContent;
    this.messageType = messageType;
    this.messageDate = messageDate;
    this.senderPicture = senderPicture;
  }
}

class Chat {
  constructor(username, displayName, image, lastMessage, date) {
    this.username = username
    this.displayName = displayName;
    this.image = image;
    this.messages = [];
    this.lastMessage = lastMessage;
    this.date = date;
  }
}


const UsersArray = [new User('wow','wowwowwow','wow','defaultpic.png'), new User('john','wowwowwow','john','defaultpic.png')];
UsersArray[0].chats.push(new Chat('ben','Ben', 'defaultpic.png', 'Hello World !', "March 25"),
new Chat('eliran', 'Eliran','defaultpic.png', 'Hey eliran !', "March 25"))

UsersArray[0].chats[0].messages.push(new MessageClass("wow", "Hello ben from wow", "text", "7/4", 'defaultpic.png'))
UsersArray[0].chats[0].messages.push(new MessageClass("ben", "Hello wow from ben.", "text", "7/4", 'defaultpic.png'))
UsersArray[0].chats[1].messages.push(new MessageClass("eliran", "Hello wow from eliran.", "text", "7/4" , 'defaultpic.png'))

const nowOnline = {onlineUser:null};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/contact' element={<Contact nowOnline={nowOnline} UsersArray={UsersArray}/>}></Route>
      <Route exact path='/chat' element={<ChatPage nowOnline={nowOnline} UsersArray={UsersArray}/>}></Route>
      <Route exact path='/register' element={<RegisterPage UsersArray={UsersArray} nowOnline={nowOnline}/>}></Route>
      <Route path='/' element={<LoginPage UsersArray={UsersArray} nowOnline={nowOnline}/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
,
  document.getElementById('root')
);

export  {User, Chat, MessageClass};


