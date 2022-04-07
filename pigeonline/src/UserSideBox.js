import { Link } from 'react-router-dom';
import './ChatPage.css';
import './SampleChat.css'


function UserSideBox({image,displayname,date,lastMessage,username}) {
    return(
        
        <Link to='/contact' params={{username:username}}>
        <button className="li_user">
          <div className="chat_list">
            <div className="chat_people">
              <div className="chat_img">
                {" "}
                <img
                  src="https://ptetutorials.com/images/user-profile.png"
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
          </Link>
          
    )
}

export default UserSideBox;