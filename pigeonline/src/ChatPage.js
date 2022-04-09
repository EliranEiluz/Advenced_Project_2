import './ChatPage.css';
import './SampleChat.css';
import ChatMenu from './ChatMenu';
import UserSideBox from './UserSideBox';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ChatPage({nowOnline, UsersArray}) {
  const [chats, setChats] = useState(nowOnline.onlineUser.chats.map((chat, key) => {
    return <UserSideBox displayname={chat.displayName} image={chat.image} date={chat.date} lastMessage={chat.lastMessage} username={chat.username} nowOnline={nowOnline} setContact={null} setMessages={null} key={key}/>}));
  
    return (
    <>
      <div className="row" id="Bar">
      <div className="col"><Link to="/"><img src="im4.png" id="leftLogo" /></Link></div>
      <div className="col logoWrap"><Link to="/"><img src="logo.png" id="webLogo" /></Link></div>
    </div>

      <div className="messaging">
        <div className="inbox_msg">
          <ChatMenu nowOnline={nowOnline} UsersArray={UsersArray} chats={chats} setChats={setChats} setMessages={null}/>
        </div>
      </div>
    </>
    
  );
}

export default ChatPage;

