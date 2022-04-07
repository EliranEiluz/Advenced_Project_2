import './ChatPage.css';
import './SampleChat.css';
import { useState } from 'react';
import {Chat} from './index'
import UserSideBox from './UserSideBox';

function AddUser({nowOnline, UsersArray, setChats}) {
const toAdd = useState({newUser : '', objectUser : null});

  function handleClick() {
    if(!UsersArray.find((e) => e.username == toAdd.newUser)) {
      alert('not found')
    }
    else {
      toAdd.objectUser = UsersArray.find((e) => e.username == toAdd.newUser);
      if(!nowOnline.onlineUser.chats.find((e) => e.displayName == toAdd.objectUser.displayName)) {
        nowOnline.onlineUser.chats.push(new Chat(toAdd.objectUser.username, toAdd.objectUser.displayName, toAdd.objectUser.image, "", ""))
        setChats(
          nowOnline.onlineUser.chats.map((chat, key) => {
            console.log(chat.displayName);
            return <UserSideBox displayname={chat.displayName} image={chat.image} date={chat.date} lastMessage={chat.lastMessage} username={chat.username} key={key}/>})
        );
      }
    }
  }

  function handleChange(e) {
    const {value} = e.target;
    toAdd.newUser = value;
  }

  return (
    <>
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
          <input type="text" className="form-control" placeholder="Contact's identifier" onChange={handleChange}></input>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleClick} data-bs-dismiss="modal">Add</button>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default AddUser;

