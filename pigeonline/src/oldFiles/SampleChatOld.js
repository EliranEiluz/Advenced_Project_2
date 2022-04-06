import './SampleChat.css' 
import { Link } from 'react-router-dom';


function SampleChatOld() {
    return(
      <>
      <div className="row" id="Bar">
      <div className="col"><img src="im4.png" id="leftLogo" /></div>
      <div className="col" style={{paddingRight: 0}}><img src="logo.png" id="webLogo" /></div>
    </div>
      
        <div className="messaging">
  <div className="inbox_msg">
    <div className="inbox_people">
      <div className="headind_srch">
        <div className="recent_heading">
          <h4>Recent</h4>
        </div>
        <div className="srch_bar">
        <button type="button" id="addUser" data-bs-toggle="modal" data-bs-target="#contactModal">
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-plus-fill">
          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
        </svg>
      </button>

        <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ModalLabel">Add new contact</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <input type="text" className="form-control" placeholder="Contact's identifier"></input>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
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
    
    <div className="mesgs">
      <div className="msg_history">
        <div className="incoming_msg">
          <div className="incoming_msg_img">
            {" "}
            <img
              src="https://ptetutorials.com/images/user-profile.png"
              alt="sunil"
            />{" "}
          </div>
          <div className="received_msg">
            <div className="received_withd_msg">
              <p>Test which is a new approach to have all solutions</p>
              <span className="time_date"> 11:01 AM | June 9</span>
            </div>
          </div>
        </div>
        <div className="outgoing_msg">
          <div className="sent_msg">
            <p>Test which is a new approach to have all solutions</p>
            <span className="time_date"> 11:01 AM | June 9</span>{" "}
          </div>
        </div>
        <div className="incoming_msg">
          <div className="incoming_msg_img">
            {" "}
            <img
              src="https://ptetutorials.com/images/user-profile.png"
              alt="sunil"
            />{" "}
          </div>
          <div className="received_msg">
            <div className="received_withd_msg">
              <p>Test, which is a new approach to have</p>
              <span className="time_date"> 11:01 AM | Yesterday</span>
            </div>
          </div>
        </div>
        <div className="outgoing_msg">
          <div className="sent_msg">
            <p>Apollo University, Delhi, India Test</p>
            <span className="time_date"> 11:01 AM | Today</span>{" "}
          </div>
        </div>
        <div className="incoming_msg">
          <div className="incoming_msg_img">
            {" "}
            <img
              src="https://ptetutorials.com/images/user-profile.png"
              alt="sunil"
            />{" "}
          </div>
          <div className="received_msg">
            <div className="received_withd_msg">
              <p>
                We work directly with our designers and suppliers, and sell
                direct to you, which means quality, exclusive products, at a
                price anyone can afford.
              </p>
              <span className="time_date"> 11:01 AM | Today</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row type_msg">
      <div className='col-xl-1 col-sm-1 col-xs-1 col' id='sendBut'>
      <button className="SendButton msg_send_btn" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
            </button>
            </div>
            <div className='col-xl-1 col-sm-1 col-xs-1 col' id='dropUpCol'>
            <div className="btn-group dropup" id='dropUpMenu'>
            <button type="button" id="dropdownMenu2" data-bs-toggle="dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
                    <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
            </button>
            <ul className="dropdown-menu">
                <li className='li'>
                    <div className="img-upload dropdown-item">
                        <label htmlFor="file-input">
                            <svg id="iconImg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                            </svg>
                        </label>
                        <input id="file-input" type="file" />
                    </div>
                </li>
                <li><hr className="dropdown-divider"></hr></li>

                <li>
                    <div className="vid-upload dropdown-item">
                        <label htmlFor="file-input">
                            <svg id="iconVid" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-video-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
                            </svg>
                        </label>
                        <input id="file-input" type="file" />
                    </div>
                </li>
                <li><hr className="dropdown-divider"></hr></li>

                {/*change last li to lable+input*/}
                <li><button className="dropdown-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-volume-up-fill" viewBox="0 0 16 16">
                        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                        <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
                    </svg>
                </button></li>
            </ul>
        </div>
            </div>
            <div className='col-xl-10 col-sm-10 col-xs-10 col' id='inputRow'>
        <input type="text" className="form-control" id="messageText" placeholder="New message here..."></input>
        </div>
      </div>
    </div>
  </div>
</div>
</>
    )
}

export default SampleChatOld;