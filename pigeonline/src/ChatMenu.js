import { Link } from 'react-router-dom';
import './ChatPage.css';
import './SampleChat.css'
import AddUser from './AddUser';
import UserSideBox from './UserSideBox'

function ChatMenu() {

  return (
    <>

    <div className="inbox_people">
      <div className="headind_bar">
        <div className="recent_heading">
          <h4>Recent</h4>
        </div>
        <div className="add_bar">
        <AddUser />
        </div>
      </div>
      
      <div className="inbox_chat">
        <UserSideBox />

      </div>
    </div>
    
</>
  );
}

export default ChatMenu;

