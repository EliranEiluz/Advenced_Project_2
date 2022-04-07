import './ChatPage.css';
import './SampleChat.css';

import ChatMenu from './ChatMenu';
import ChatWindow from './ChatWindow';


function Contact({nowOnline, UsersArray}) {

  return (
    <>
    <div className="row" id="Bar">
      <div className="col"><img src="im4.png" id="leftLogo" /></div>
      <div className="col" style={{ paddingRight: 0 }}><img src="logo.png" id="webLogo" /></div>
    </div>

    <div className="messaging">
      <div className="inbox_msg">
      <ChatMenu nowOnline={nowOnline} UsersArray={UsersArray}/>
        <ChatWindow />
      </div>
    </div>
  </>
  );
}

export default Contact;

