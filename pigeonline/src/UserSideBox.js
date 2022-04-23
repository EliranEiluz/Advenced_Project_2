import { useNavigate } from 'react-router-dom';
import './ChatPage.css';
import './SampleChat.css'
import Message from './Message';


function UserSideBox({image,displayname,date,lastMessage,username, setMessages, nowOnline, setContactName, setCurrentChat}) {
  var navigation = useNavigate();

  function stopMedia() {
    // Wraper is the className of video and audio tags.
    var childElements = document.getElementsByClassName('Wrapper');
    for (var i = 0; i < childElements.length; i++) {
      childElements[i].pause();
      childElements[i].currentTime = 0;
    }
  }

  function handleClick() {
    // Already in '/contact' -> just rerender the contact.
    if(setMessages) {
      // Stop media while change chat.
      stopMedia();
      const currentChat = nowOnline.onlineUser.chats.find((e) => e.username === username)
      setContactName(username)
      setCurrentChat(currentChat)
      var scrollDown = document.getElementById("messageDisplay");
      if(scrollDown != null && scrollDown != undefined) {
        scrollDown.scrollTop = scrollDown.scrollHeight;
      }
      setMessages(currentChat.messages.map((message, key) => {
        return <Message senderUserName={message.from} content={message.messageContent} nowOnline={nowOnline} type={message.messageType} date={message.messageDate} senderPicture={message.senderPicture} key={key}/>}));
    }
    // Move to contact page (from chatPage).
    else {
      navigation('/contact', {state:{user:username}})
      var scrollDown = document.getElementById("messageDisplay");
      if(scrollDown != null && scrollDown != undefined) {
        scrollDown.scrollTop = scrollDown.scrollHeight;
      }
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
                  alt="contact"
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