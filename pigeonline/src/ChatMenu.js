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

        <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel">Add new contact</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <input type="text" class="form-control" placeholder="Contact's identifier"></input>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
        
    </div>

    <ul id="chatList" className="list-group">
      <li><button className="user" type="button">User-1</button></li>
      <li><button className="user" type="button">User-2</button></li>
      <li><button className="user" type="button">User-3</button></li>
      <li><button className="user" type="button">User-4</button></li>
    </ul>
  </div>
  );
}

export default ChatMenu;
