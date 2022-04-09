import './ChatPage.css';
import './SampleChat.css';
import ChatMenu from './ChatMenu';
import UserSideBox from './UserSideBox';
import { useState } from 'react';


function ChatPage({nowOnline, UsersArray}) {
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
          <ChatMenu nowOnline={nowOnline} UsersArray={UsersArray} chats={chats} setChats={setChats} setContact={null}/>
        </div>
      </div>
    </>
    
  );
}

export default ChatPage;

