import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ChatPage from './ChatPage';
import Contact from './Contact';
import { BrowserRouter,Routes, Route } from 'react-router-dom';


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




const UsersArray = [new User('Bar','Aa123456','Bar',"woman.jpg"), new User('Foo','Aa123456','Foo','defaultpic.png'),
                    new User('Baz','Aa123456','Baz',"woman.jpg"), new User('Boo','Aa123456','Boo','defaultpic.png'),
                    new User('Eliran','Aa123456','Eliran','im6.jpg'), new User('Ben','Aa123456','Ben','im3.jpg'),
                    new User('Person','Aa123456','Person','defaultpic.png')];


UsersArray[0].chats.push(new Chat('Foo', 'Foo', "defaultpic.png", 'Bye!', '17:55 | 18/6/2018'))
UsersArray[0].chats.push(new Chat('Baz', 'Baz', "woman.jpg", 'Bye!', '17:54 | 18/6/2018'))
UsersArray[0].chats.push(new Chat('Boo', 'Boo', "defaultpic.png", 'Bye!', '17:53 | 18/6/2018'))
UsersArray[0].chats.push(new Chat('Eliran', 'Eliran', "im6.jpg", 'Bye!', '17:52 | 18/6/2018'))
UsersArray[0].chats.push(new Chat('Ben', 'Ben', "im3.jpg", 'Bye!', '17:51 | 18/6/2018'))

UsersArray[1].chats.push(new Chat('Bar', 'Bar', "woman.jpg", 'Bye!', '17:55 | 18/6/2018'))
UsersArray[1].chats.push(new Chat('Baz', 'Baz', "woman.jpg", 'Bye!', '17:54 | 18/6/2018'))
UsersArray[1].chats.push(new Chat('Boo', 'Boo', "defaultpic.png", 'Bye!', '17:53 | 18/6/2018'))
UsersArray[1].chats.push(new Chat('Eliran', 'Eliran', "im6.jpg", 'Bye!', '17:52 | 18/6/2018'))
UsersArray[1].chats.push(new Chat('Ben', 'Ben', "im3.jpg", 'Bye!', '17:51 | 18/6/2018'))

UsersArray[2].chats.push(new Chat('Foo', 'Foo', "defaultpic.png", 'Bye!', '17:54 | 18/6/2018'))
UsersArray[2].chats.push(new Chat('Bar', 'Bar', "woman.jpg", 'Bye!', '17:54 | 18/6/2018'))
UsersArray[2].chats.push(new Chat('Boo', 'Boo', "defaultpic.png", 'Bye!', '17:53 | 18/6/2018'))
UsersArray[2].chats.push(new Chat('Eliran', 'Eliran', "im6.jpg", 'Bye!', '17:52 | 18/6/2018'))
UsersArray[2].chats.push(new Chat('Ben', 'Ben', "im3.jpg", 'Bye!', '17:51 | 18/6/2018'))

UsersArray[3].chats.push(new Chat('Foo', 'Foo', "defaultpic.png", 'Bye!', '17:53 | 18/6/2018'))
UsersArray[3].chats.push(new Chat('Baz', 'Baz', "woman.jpg", 'Bye!', '17:53 | 18/6/2018'))
UsersArray[3].chats.push(new Chat('Bar', 'Bar', "woman.jpg", 'Bye!', '17:53 | 18/6/2018'))
UsersArray[3].chats.push(new Chat('Eliran', 'Eliran', "im6.jpg", 'Bye!', '17:52 | 18/6/2018'))
UsersArray[3].chats.push(new Chat('Ben', 'Ben', "im3.jpg", 'Bye!', '17:51 | 18/6/2018'))

UsersArray[4].chats.push(new Chat('Foo', 'Foo', "defaultpic.png", 'Bye!', '17:52 | 18/6/2018'))
UsersArray[4].chats.push(new Chat('Baz', 'Baz', "woman.jpg", 'Bye!', '17:52 | 18/6/2018'))
UsersArray[4].chats.push(new Chat('Boo', 'Boo', "defaultpic.png", 'Bye!', '17:52 | 18/6/2018'))
UsersArray[4].chats.push(new Chat('Bar', 'Bar', "woman.jpg", 'Bye!', '17:52 | 18/6/2018'))
UsersArray[4].chats.push(new Chat('Ben', 'Ben', "im3.jpg", 'Bye!', '17:51 | 18/6/2018'))

UsersArray[5].chats.push(new Chat('Foo', 'Foo', "defaultpic.png", 'Bye!', '17:51 | 18/6/2018'))
UsersArray[5].chats.push(new Chat('Baz', 'Baz', "woman.jpg", 'Bye!', '17:51 | 18/6/2018'))
UsersArray[5].chats.push(new Chat('Boo', 'Boo', "defaultpic.png", 'Bye!', '17:51 | 18/6/2018'))
UsersArray[5].chats.push(new Chat('Eliran', 'Eliran', "im6.jpg", 'Bye!', '17:51 | 18/6/2018'))
UsersArray[5].chats.push(new Chat('Bar', 'Bar', "woman.jpg", 'Bye!', '17:51 | 18/6/2018'))


let messagesArray = [new MessageClass('Bar', "Hey Foo!", 'text', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Bar', 'im7.jpg', 'image', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Bar', 'video.mp4', 'video', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Bar', "champ.mp3", 'audio', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Foo', "Bye!", 'text', '17:55 | 19/6/2018', "defaultpic.png")]
UsersArray[0].chats[0].messages.push.apply(UsersArray[0].chats[0].messages, messagesArray)
UsersArray[1].chats[0].messages.push.apply(UsersArray[1].chats[0].messages, messagesArray)

messagesArray = [new MessageClass('Bar', "Hey Baz!", 'text', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Bar', 'im5.png', 'image', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Bar', 'video.mp4', 'video', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Bar', "champ.mp3", 'audio', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Baz', "Bye!", 'text', '17:54 | 19/6/2018', "woman.jpg")]
UsersArray[0].chats[1].messages.push.apply(UsersArray[0].chats[1].messages, messagesArray)
UsersArray[2].chats[1].messages.push.apply(UsersArray[2].chats[1].messages, messagesArray)

messagesArray = [new MessageClass('Bar', "Hey Boo!", 'text', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Bar', 'im7.jpg', 'image', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Bar', 'video.mp4', 'video', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Bar', "champ.mp3", 'audio', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Boo', "Bye!", 'text', '17:53 | 19/6/2018', "defaultpic.png")]
UsersArray[0].chats[2].messages.push.apply(UsersArray[0].chats[2].messages, messagesArray)
UsersArray[3].chats[2].messages.push.apply(UsersArray[3].chats[2].messages, messagesArray)

messagesArray = [new MessageClass('Bar', "Hey Eliran!", 'text', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Bar', 'im5.png', 'image', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Bar', 'video.mp4', 'video', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Bar', "champ.mp3", 'audio', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Eliran', "Bye!", 'text', '17:52 | 19/6/2018', "im6.jpg")]
UsersArray[0].chats[3].messages.push.apply(UsersArray[0].chats[3].messages, messagesArray)
UsersArray[4].chats[3].messages.push.apply(UsersArray[4].chats[3].messages, messagesArray)

messagesArray = [new MessageClass('Bar', "Hey Ben!", 'text', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Bar', 'im5.png', 'image', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Bar', 'video.mp4', 'video', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Bar', "champ.mp3", 'audio', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Ben', "Bye!", 'text', '17:51 | 19/6/2018', "im3.jpg")]
UsersArray[0].chats[4].messages.push.apply(UsersArray[0].chats[4].messages, messagesArray)
UsersArray[5].chats[4].messages.push.apply(UsersArray[5].chats[4].messages, messagesArray)


messagesArray = [new MessageClass('Foo', "Hey Baz!", 'text', '17:51 | 18/6/2018', "defaultpic.png"),
new MessageClass('Foo', 'im7.jpg', 'image', '17:51 | 18/6/2018', "defaultpic.png"), new MessageClass('Foo', 'video.mp4', 'video', '17:51 | 18/6/2018', "defaultpic.png"),
new MessageClass('Foo', "champ.mp3", 'audio', '17:51 | 18/6/2018', "defaultpic.png"), new MessageClass('Baz', "Bye!", 'text', '17:54 | 19/6/2018', "woman.jpg")]
UsersArray[1].chats[1].messages.push.apply(UsersArray[1].chats[1].messages, messagesArray)
UsersArray[2].chats[0].messages.push.apply(UsersArray[2].chats[0].messages, messagesArray)

messagesArray = [new MessageClass('Foo', "Hey Boo!", 'text', '17:51 | 18/6/2018', "defaultpic.png"),
new MessageClass('Foo', 'im5.png', 'image', '17:51 | 18/6/2018', "defaultpic.png"), new MessageClass('Foo', 'video.mp4', 'video', '17:51 | 18/6/2018', "defaultpic.png"),
new MessageClass('Foo', "champ.mp3", 'audio', '17:51 | 18/6/2018', "defaultpic.png"), new MessageClass('Boo', "Bye!", 'text', '17:53 | 19/6/2018', "defaultpic.png")]
UsersArray[1].chats[2].messages.push.apply(UsersArray[1].chats[2].messages, messagesArray)
UsersArray[3].chats[0].messages.push.apply(UsersArray[3].chats[0].messages, messagesArray)

messagesArray = [new MessageClass('Foo', "Hey Eliran!", 'text', '17:51 | 18/6/2018', "defaultpic.png"),
new MessageClass('Foo', 'im7.jpg', 'image', '17:51 | 18/6/2018', "defaultpic.png"), new MessageClass('Foo', 'video.mp4', 'video', '17:51 | 18/6/2018', "defaultpic.png"),
new MessageClass('Foo', "champ.mp3", 'audio', '17:51 | 18/6/2018', "defaultpic.png"), new MessageClass('Eliran', "Bye!", 'text', '17:52 | 19/6/2018', "im6.jpg")]
UsersArray[1].chats[3].messages.push.apply(UsersArray[1].chats[3].messages, messagesArray)
UsersArray[4].chats[0].messages.push.apply(UsersArray[4].chats[0].messages, messagesArray)

messagesArray = [new MessageClass('Foo', "Hey Ben!", 'text', '17:51 | 18/6/2018', "defaultpic.png"),
new MessageClass('Foo', 'im5.png', 'image', '17:51 | 18/6/2018', "defaultpic.png"), new MessageClass('Foo', 'video.mp4', 'video', '17:51 | 18/6/2018', "defaultpic.png"),
new MessageClass('Foo', "champ.mp3", 'audio', '17:51 | 18/6/2018', "defaultpic.png"), new MessageClass('Ben', "Bye!", 'text', '17:51 | 19/6/2018', "im3.jpg")]
UsersArray[1].chats[4].messages.push.apply(UsersArray[1].chats[4].messages, messagesArray)
UsersArray[5].chats[0].messages.push.apply(UsersArray[5].chats[0].messages, messagesArray)


messagesArray = [new MessageClass('Baz', "Hey Boo!", 'text', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Baz', 'im7.jpg', 'image', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Baz', 'video.mp4', 'video', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Baz', "champ.mp3", 'audio', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Boo', "Bye!", 'text', '17:53 | 19/6/2018', "defaultpic.png")]
UsersArray[2].chats[2].messages.push.apply(UsersArray[2].chats[2].messages, messagesArray)
UsersArray[3].chats[1].messages.push.apply(UsersArray[3].chats[1].messages, messagesArray)

messagesArray = [new MessageClass('Baz', "Hey Eliran!", 'text', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Baz', 'im5.png', 'image', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Baz', 'video.mp4', 'video', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Baz', "champ.mp3", 'audio', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Eliran', "Bye!", 'text', '17:52 | 19/6/2018', "im6.jpg")]
UsersArray[2].chats[3].messages.push.apply(UsersArray[2].chats[3].messages, messagesArray)
UsersArray[4].chats[1].messages.push.apply(UsersArray[4].chats[1].messages, messagesArray)

messagesArray = [new MessageClass('Baz', "Hey Ben!", 'text', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Baz', 'im7.jpg', 'image', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Baz', 'video.mp4', 'video', '17:51 | 18/6/2018', "woman.jpg"),
new MessageClass('Baz', "champ.mp3", 'audio', '17:51 | 18/6/2018', "woman.jpg"), new MessageClass('Ben', "Bye!", 'text', '17:51 | 19/6/2018', "im3.jpg")]
UsersArray[2].chats[4].messages.push.apply(UsersArray[2].chats[4].messages, messagesArray)
UsersArray[5].chats[1].messages.push.apply(UsersArray[5].chats[1].messages, messagesArray)


messagesArray = [new MessageClass('Boo', "Hey Eliran!", 'text', '17:51 | 18/6/2018', "defaultpic.png"),
new MessageClass('Boo', 'im5.png', 'image', '17:51 | 18/6/2018', "defaultpic.png"), new MessageClass('Boo', 'video.mp4', 'video', '17:51 | 18/6/2018', "defaultpic.png"),
new MessageClass('Boo', "champ.mp3", 'audio', '17:51 | 18/6/2018', "defaultpic.png"), new MessageClass('Eliran', "Bye!", 'text', '17:52 | 19/6/2018', "im6.jpg")]
UsersArray[3].chats[3].messages.push.apply(UsersArray[3].chats[3].messages, messagesArray)
UsersArray[4].chats[2].messages.push.apply(UsersArray[4].chats[2].messages, messagesArray)

messagesArray = [new MessageClass('Boo', "Hey Ben!", 'text', '17:51 | 18/6/2018', "defaultpic.png"),
new MessageClass('Boo', 'im7.jpg', 'image', '17:51 | 18/6/2018', "defaultpic.png"), new MessageClass('Boo', 'video.mp4', 'video', '17:51 | 18/6/2018', "defaultpic.png"),
new MessageClass('Boo', "champ.mp3", 'audio', '17:51 | 18/6/2018', "defaultpic.png"), new MessageClass('Ben', "Bye!", 'text', '17:51 | 19/6/2018', "im3.jpg")]
UsersArray[3].chats[4].messages.push.apply(UsersArray[3].chats[4].messages, messagesArray)
UsersArray[5].chats[2].messages.push.apply(UsersArray[5].chats[2].messages, messagesArray)


messagesArray = [new MessageClass('Eliran', "Hey Ben!", 'text', '17:51 | 18/6/2018', "im6.jpg"),
new MessageClass('Eliran', 'im5.png', 'image', '17:51 | 18/6/2018', "im6.jpg"), new MessageClass('Eliran', 'video.mp4', 'video', '17:51 | 18/6/2018', "im6.jpg"),
new MessageClass('Eliran', "champ.mp3", 'audio', '17:51 | 18/6/2018', "im6.jpg"), new MessageClass('Ben', "Bye!", 'text', '17:51 | 19/6/2018', "im3.jpg")]
UsersArray[4].chats[4].messages.push.apply(UsersArray[4].chats[4].messages, messagesArray)
UsersArray[5].chats[3].messages.push.apply(UsersArray[5].chats[3].messages, messagesArray)



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


