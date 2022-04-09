import './ChatPage.css';
import './SampleChat.css';
import UserSideBox from './UserSideBox';
import { useState } from 'react';
import ChatMenu from './ChatMenu';
import ChatWindow from './ChatWindow';
import { useLocation, useParams } from 'react-router-dom';
import Message from './Message';

function Contact({nowOnline, UsersArray})  {
  const params = useLocation();
  const [contactUserName, setContactUserName] = useState(params.state.user);
  const currentChat = nowOnline.onlineUser.chats.find((e) => e.username == contactUserName)
  // all the messages with the contact.
  const [chatMessages, setChatMessages] = useState(currentChat.messages.map((message, key) => {
    return <Message senderUserName={message.from} content={message.messageContent} nowOnline={nowOnline} type={message.messageType} date={message.messageDate} key={key}/>}));

  const [chats, setChats] = useState(nowOnline.onlineUser.chats.map((chat, key) => {
    return <UserSideBox displayname={chat.displayName} image={chat.image} date={chat.date} lastMessage={chat.lastMessage} username={chat.username} setMessages={setChatMessages} key={key} nowOnline={nowOnline}/>}));
  
    return (
    <>
    <div className="row" id="Bar">
      <div className="col"><img src="im4.png" id="leftLogo" /></div>
      <div className="col" style={{ paddingRight: 0 }}><img src="logo.png" id="webLogo" /></div>
    </div>

    <div className="messaging">
      <div className="inbox_msg">
      <ChatMenu nowOnline={nowOnline} UsersArray={UsersArray} chats={chats} setChats={setChats}/>
        <ChatWindow setChats={setChats} nowOnline={nowOnline} chatMessages={chatMessages} />
      </div>
    </div>
  </>
  );
}

export default Contact;

