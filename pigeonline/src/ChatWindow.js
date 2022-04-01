import './ChatPage.css';
import MessageRow from './MessageRow';

function ChatWindow() {

  return (
    <div id="chatWindow" className="col-8">
      <div className="row chat-bar">
        <div>Name</div>
      </div>
      
      <div className="row" id="chat">
        <div>Chat...</div>
      </div>

      <MessageRow />

    </div>
  );
}

export default ChatWindow;

