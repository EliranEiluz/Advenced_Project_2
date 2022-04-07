import './ChatPage.css';
import './SampleChat.css';
import UserSideBox from './UserSideBox';
import { useState } from 'react';
import ChatMenu from './ChatMenu';
import ChatWindow from './ChatWindow';
import { useLocation, useParams } from 'react-router-dom';


function Contact({nowOnline, UsersArray})  {
  const params = useLocation();
  const username = params.state.user;
  const [chats, setChats] = useState(nowOnline.onlineUser.chats.map((chat, key) => {
    return <UserSideBox displayname={chat.displayName} image={chat.image} date={chat.date} lastMessage={chat.lastMessage} username={chat.username} key={key}/>}));
  return (
    <>
    <div className="row" id="Bar">
      <div className="col"><img src="im4.png" id="leftLogo" /></div>
      <div className="col" style={{ paddingRight: 0 }}><img src="logo.png" id="webLogo" /></div>
    </div>

    <div className="messaging">
      <div className="inbox_msg">
      <ChatMenu nowOnline={nowOnline} UsersArray={UsersArray} chats={chats} setChats={setChats}/>
        <ChatWindow setChats={setChats} nowOnline={nowOnline}/>
      </div>
    </div>
  </>
  );
}

export default Contact;

