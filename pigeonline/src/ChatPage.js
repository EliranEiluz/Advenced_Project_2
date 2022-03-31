import './ChatPage.css';


function ChatPage() {

  return (
    <div className="container-fluid">
    <div className="row" id="Bar">
      <div className="col"><img src="im4.png" id="leftLogo" /></div>
      <div className="col" style={{paddingRight: 0}}><img src="logo.png" id="webLogo" /></div>
    </div>
    <div id="chatCard" className="card">
      <div className="card-body row">
        <div id="chatMenu" className="col-4">
          <div className="row user-bar">
            <div className="col" id="userName">UserName</div>
            <div className="col" />
            <button type="button" id="addUser">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-plus-fill">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
              </svg>
            </button>
          </div>
          <ul id="chatList" className="list-group">
            <li><button className="user" type="button">User-1</button></li>
            <li><button className="user" type="button">User-2</button></li>
            <li><button className="user" type="button">User-3</button></li>
            <li><button className="user" type="button">User-4</button></li>
          </ul>
        </div>
        <div id="chatWindow" className="col-8">
          <div className="row chat-bar">
            <div>Name</div>
          </div>
          <div className="row" id="chat">
            <div>Chat...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ChatPage;

