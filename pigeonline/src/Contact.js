import './ChatPage.css';
import './SampleChat.css';
import UserSideBox from './UserSideBox';
import { useState } from 'react';
import ChatMenu from './ChatMenu';
import ChatWindow from './ChatWindow';
import { useLocation,Link } from 'react-router-dom';
import Message from './Message';


function Contact({nowOnline, UsersArray})  {
  // Take the parameter from Link calling.
  const params = useLocation();
  // The current contact we push it.
  const [contactUserName, setContactUserName] = useState(params.state.user)
  // The chat with the contact.
  const [currentChat, setCurrentChat] = useState(nowOnline.onlineUser.chats.find((e) => e.username === contactUserName))
  // Chat messages with the contact.
  const [chatMessages, setChatMessages] = useState(currentChat.messages.map((message, key) => {
    return <Message senderUserName={message.from} content={message.messageContent} nowOnline={nowOnline} type={message.messageType} date={message.messageDate} senderPicture={message.senderPicture} key={key}/>}));
  // The side list of current user's chats.
  const [chats, setChats] = useState(nowOnline.onlineUser.chats.map((chat, key) => {
    return <UserSideBox displayname={chat.displayName} image={chat.image} date={chat.date} lastMessage={chat.lastMessage} username={chat.username} setMessages={setChatMessages} setContactName={setContactUserName} setCurrentChat={setCurrentChat} nowOnline={nowOnline} key={key}/>}));
  
    return (
    <>
    <div className="row" id="Bar">
      <div className="col"><img src="im4.png" id="leftLogo" alt="left-logo"/></div>
      <div className="col logoWrap"><img src="logo.png" id="webLogo" alt="right-logo"/></div>
    </div>

    <div className="messaging">
      <div className="inbox_msg">
      <ChatMenu nowOnline={nowOnline} UsersArray={UsersArray} chats={chats} setChats={setChats} setMessages={setChatMessages} setContactName={setContactUserName} setCurrentChat={setCurrentChat}/>
        <ChatWindow setChats={setChats} nowOnline={nowOnline} chatMessages={chatMessages} setChatMessages={setChatMessages} contactUserName={contactUserName} UsersArray={UsersArray} setContactUserName={setContactUserName} setCurrentChat={setCurrentChat}/>
      </div>
    </div>
  </>
  );
}

export default Contact;

