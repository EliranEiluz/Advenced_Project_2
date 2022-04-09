import './ChatPage.css';
import './SampleChat.css';
import DropUp from './DropUp';


function ChatWindow({setChats, nowOnline, chatMessages}) {
  
  // find the chat with the contact we push on his chat.

    // use this function only you send new message (input).
    function dateNow() {
        const currentDate = new Date();
        const date = currentDate.getHours() + ":" + currentDate.getMinutes() +
        " | " + currentDate.getDate() + "/" + ((currentDate.getMonth())+1) + "/" + currentDate.getFullYear();
        return date;
    }

  return (
    <div className="mesgs">
      <div className="msg_history">
      {/* show the messages.*/}
        {chatMessages}
      </div>

      <div className="row type_msg">
      <div className='col-xl-1 col-sm-1 col-xs-1 col' id='sendBut'>
      <button className="SendButton msg_send_btn" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
            </button>
            </div>

            <DropUp />

            <div className='col-xl-10 col-sm-10 col-xs-10 col' id='inputRow'>
        <input type="text" className="form-control" id="messageText" placeholder="New message here..."></input>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;

