import { useNavigate } from 'react-router-dom';
import './ChatPage.css';
import './SampleChat.css'
import Message from './Message';

function UserSideBox({image,displayname,date,lastMessage,username, setMessages, nowOnline, setContact}) {
  var navigation = useNavigate();
  function handleClick() {
    if(setMessages) {
      const currentChat = nowOnline.onlineUser.chats.find((e) => e.username == username)
      setContact(username)
      setMessages(currentChat.messages.map((message, key) => {
        return <Message senderUserName={message.from} content={message.messageContent} nowOnline={nowOnline} type={message.messageType} date={message.messageDate} senderPicture={message.senderPicture} key={key}/>}));
    }
    else {
      navigation('/contact', {state:{user:username}})
    }
  }

    return(
        <button className="li_user" onClick={handleClick}>
          <div className="chat_list">
            <div className="chat_people">
              <div className="chat_img">
                {" "}
                <img
                  src={image}
                  alt="sunil"
                />{" "}
              </div>
              <div className="chat_ib">
                <h5>
                  {displayname} <span className="chat_date">{date}</span>
                </h5>
                <p>
                  {lastMessage}
                </p>
              </div>
            </div>
          </div>
          </button>
          
    )
}

export default UserSideBox;