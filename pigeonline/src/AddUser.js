import './ChatPage.css';
import './SampleChat.css';
import { useState } from 'react';
import {Chat} from './index'
import UserSideBox from './UserSideBox';


function AddUser({nowOnline, UsersArray, setChats}) {
const toAdd = useState({newUser : '', objectUser : null});

  function handleAddClick() {
    document.getElementById("contentMessage").value = "";
    if(toAdd.newUser == nowOnline.onlineUser.username) {
      if(document.getElementById("addYourself")) {
        document.getElementById("addYourself").style.display = "block";
      }
      if(document.getElementById("notFound")) {
        document.getElementById("notFound").style.display = "none";
      }
      if(document.getElementById("sucsessAdd")) {
        document.getElementById("sucsessAdd").style.display = "none";
      }
    }
    else if(!UsersArray.find((e) => e.username == toAdd.newUser)) {
      if(document.getElementById("addYourself")) {
        document.getElementById("addYourself").style.display = "none";
      }
      if(document.getElementById("notFound")) {
        document.getElementById("notFound").style.display = "block";
      }
      if(document.getElementById("sucsessAdd")) {
        document.getElementById("sucsessAdd").style.display = "none";
      }
    }
    else {
      if(document.getElementById("sucsessAdd")) {
        document.getElementById("sucsessAdd").style.display = "block";
      }
      if(document.getElementById("addYourself")) {
        document.getElementById("addYourself").style.display = "none";
      }
      if(document.getElementById("notFound")) {
        document.getElementById("notFound").style.display = "none";
      }
      toAdd.objectUser = UsersArray.find((e) => e.username == toAdd.newUser);
      if(!nowOnline.onlineUser.chats.find((e) => e.username == toAdd.objectUser.username)) { // need change to userName instead displayName.
        nowOnline.onlineUser.chats.push(new Chat(toAdd.objectUser.username, toAdd.objectUser.displayName, toAdd.objectUser.image, "", ""))
        toAdd.objectUser.chats.push(new Chat(nowOnline.onlineUser.username, nowOnline.onlineUser.displayName, "", ""))
        setChats(
          nowOnline.onlineUser.chats.map((chat, key) => {
            console.log(chat.displayName);
            return <UserSideBox displayname={chat.displayName} image={chat.image} date={chat.date} lastMessage={chat.lastMessage} username={chat.username} key={key}/>})
        );
      }
    }
  }

  function handleCloseClick() {
    if(document.getElementById("addYourself")) {
      document.getElementById("addYourself").style.display = "none";
    }
    if(document.getElementById("notFound")) {
      document.getElementById("notFound").style.display = "none";
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
            
            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={handleCloseClick} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="alert alert-danger alert-dismissible fade show" id="notFound" role="alert">
              <strong>The user not found.</strong>
            </div>
            <div className="alert alert-danger alert-dismissible fade show" id="addYourself" role="alert">
              <strong>You can't chat with yourself.</strong>
            </div>
            <div className="alert alert-success alert-dismissible fade show" id="sucsessAdd" role="alert">
              <strong>User added succefully.</strong>
            </div>
          <input type="text" id="contentMessage" className="form-control" placeholder="Contact's identifier" onChange={handleChange}></input>
          </div>
          <div className="modal-footer">
            <button type="button" id="addBtn" className="btn btn-primary" onClick={handleAddClick}>Add</button>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default AddUser;

