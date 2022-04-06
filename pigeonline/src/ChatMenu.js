import { Link } from 'react-router-dom';
import './ChatPage.css';
import './SampleChat.css'
import AddUser from './AddUser';

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

      <Link to='/contact'>
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
                Sunil Rajput <span className="chat_date">Dec 25</span>
              </h5>
              <p>
                Test, which is a new approach to have all solutions astrology
                under one roof.
              </p>
            </div>
          </div>
        </div>
        </button>
        </Link>

        <Link to='/contact'>
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
                Sunil Rajput <span className="chat_date">Dec 25</span>
              </h5>
              <p>
                Test, which is a new approach to have all solutions astrology
                under one roof.
              </p>
            </div>
          </div>
        </div>
        </button>
        </Link>

        <Link to='/contact'>
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
                Sunil Rajput <span className="chat_date">Dec 25</span>
              </h5>
              <p>
                Test, which is a new approach to have all solutions astrology
                under one roof.
              </p>
            </div>
          </div>
        </div>
        </button>
        </Link>

        <Link to='/contact'>
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
                Sunil Rajput <span className="chat_date">Dec 25</span>
              </h5>
              <p>
                Test, which is a new approach to have all solutions astrology
                under one roof.
              </p>
            </div>
          </div>
        </div>
        </button>
        </Link>

        <Link to='/contact'>
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
                Sunil Rajput <span className="chat_date">Dec 25</span>
              </h5>
              <p>
                Test, which is a new approach to have all solutions astrology
                under one roof.
              </p>
            </div>
          </div>
        </div>
        </button>
        </Link>

        <Link to='/contact'>
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
                Sunil Rajput <span className="chat_date">Dec 25</span>
              </h5>
              <p>
                Test, which is a new approach to have all solutions astrology
                under one roof.
              </p>
            </div>
          </div>
        </div>
        </button>
        </Link>

        <Link to='/contact'>
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
                Sunil Rajput <span className="chat_date">Dec 25</span>
              </h5>
              <p>
                Test, which is a new approach to have all solutions astrology
                under one roof.
              </p>
            </div>
          </div>
        </div>
        </button>
        </Link>

      </div>
    </div>
    
</>
  );
}

export default ChatMenu;

