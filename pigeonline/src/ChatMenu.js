
import './ChatPage.css';
import './SampleChat.css'
import AddUser from './AddUser';


function ChatMenu({nowOnline, UsersArray, setChats, chats}) {


  return (
    <>
    <div className="inbox_people">
      <div className="headind_bar">
        <div className="recent_heading">
          <h4>Recent</h4>
        </div>
        <div className="add_bar">
        <AddUser nowOnline={nowOnline} UsersArray={UsersArray} setChats={setChats}/>
        </div>
      </div>
      
      <div className="inbox_chat">
        {chats}

      </div>
    </div>
    
</>
  );
}

export default ChatMenu;

