import './ChatPage.css';
import ChatMenu from './ChatMenu';


function ChatPage() {

  return (
    <div className="container-fluid">
    <div className="row" id="Bar">
      <div className="col"><img src="im4.png" id="leftLogo" /></div>
      <div className="col" style={{paddingRight: 0}}><img src="logo.png" id="webLogo" /></div>
    </div>

    <div id="chatCard" className="card">
      <div className="card-body row">
      
        <ChatMenu />
        
      </div>
    </div>
  </div>
  );
}

export default ChatPage;

