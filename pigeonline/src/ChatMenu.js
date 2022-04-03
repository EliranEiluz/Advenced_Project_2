import { Link } from 'react-router-dom';
import './ChatPage.css';

function ChatMenu() {

  return (
    <div id="chatMenu" className="col-4">
    <div className="row user-bar">
      <div className="col" id="userName">UserName</div>
      <div className="col" />
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

    <ul id="chatList" className="list-group">
      <li><Link to='/contact'><button className="user" type="button">User-1</button></Link></li>
      <li><Link to='/contact'><button className="user" type="button">User-2</button></Link></li>
      <li><Link to='/contact'><button className="user" type="button">User-3</button></Link></li>
      <li><Link to='/contact'><button className="user" type="button">User-4</button></Link></li>
    </ul>
  </div>
  );
}

export default ChatMenu;

