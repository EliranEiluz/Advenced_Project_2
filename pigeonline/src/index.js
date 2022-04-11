import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ChatPage from './ChatPage';
import Contact from './Contact';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Message from './Message';


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


const UsersArray = [new User('Bar','Aa123456','Bar',"woman.jpg"), new User('Foo','Aa123456','Foo','defaultpic.png')];
UsersArray[0].chats.push(new Chat('Foo', 'Foo', "defaultpic.png", 'Bye!', '17:53 | 18/6/2018'))
UsersArray[1].chats.push(new Chat('Bar', 'Bar', "woman.jpg", 'Bye!', '17:53 | 18/6/2018'))
UsersArray[0].chats[0].messages.push(new MessageClass('Foo', "Hey Bar!", 'text', '17:51 | 18/6/2018', "defaultpic.png"))
UsersArray[1].chats[0].messages.push(new MessageClass('Foo', "Hey Bar!", 'text', '17:51 | 18/6/2018', "defaultpic.png"))
UsersArray[1].chats[0].messages.push(new MessageClass('Bar', "Hey Foo!", 'text', '17:51 | 18/6/2018', "woman.jpg"))
UsersArray[0].chats[0].messages.push(new MessageClass('Bar', "Hey Foo!", 'text', '17:51 | 18/6/2018', "woman.jpg"))
UsersArray[1].chats[0].messages.push(new MessageClass('Bar', 'send.png', 'image', '17:52 | 18/6/2018', "woman.jpg"))
UsersArray[0].chats[0].messages.push(new MessageClass('Bar', 'send.png', 'image', '17:52 | 18/6/2018', "woman.jpg"))
UsersArray[1].chats[0].messages.push(new MessageClass('Foo', 'video.mp4', 'video', '17:53 | 18/6/2018', "defaultpic.png"))
UsersArray[0].chats[0].messages.push(new MessageClass('Foo', 'video.mp4', 'video', '17:53 | 18/6/2018', "defaultpic.png"))
UsersArray[0].chats[0].messages.push(new MessageClass('Foo', "Bye!", 'text', '17:53 | 18/6/2018', "defaultpic.png"))
UsersArray[1].chats[0].messages.push(new MessageClass('Foo', "Bye!", 'text', '17:53 | 18/6/2018', "defaultpic.png"))

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


