import './ChatPage.css';
import './SampleChat.css';
import DropUp from './DropUp';
import {useState} from 'react'
import {MessageClass} from './index';
import Message from './Message';
import UserSideBox from './UserSideBox';

function ChatWindow({setChats, nowOnline, chatMessages, contactUserName, UsersArray, setChatMessages, setContactUserName}) {
  const [textInput, setTextInput] = useState('');
  const contactObject = UsersArray.find((e) => e.username == contactUserName)
  const currentUserChat = nowOnline.onlineUser.chats.find((e) => e.username == contactUserName);
  const [lastRecord, setLastRecord] = useState('');


  function handleChange(e) {
    setTextInput(e.target.value)
  }

  function newTextMessage() {
    // don't send empty message.
    if (document.getElementById("messageText").value == "") {
      return;
    }
    // clean the message line.
    document.getElementById("messageText").value = "";
    const date = dateNow()
    const newMessage = new MessageClass(nowOnline.onlineUser.username, textInput, "text",date, nowOnline.onlineUser.picture)
    currentUserChat.lastMessage = textInput;
    afterMessage(newMessage, textInput,date);
  }

  function newPictureMessage(e) {
    //setImageInput(e.target.value)
    const image = document.getElementById("image-input").files[0].name;
    if(image == "") {
      return;
    }
    var fileName = image;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substring(idxDot, fileName.length).toLowerCase();
    if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
      const date = dateNow()
      const newMessage = new MessageClass(nowOnline.onlineUser.username, image, "image", date, nowOnline.onlineUser.picture)
      currentUserChat.lastMessage = "image";
      afterMessage(newMessage, "image", date);
    }else{
       alert('invalid')
    }   
  }

  function newVideoMessage() {
    const video = document.getElementById("video-input").files[0].name;
    if(video == "") {
      return;
    }
    var fileName = video;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substring(idxDot, fileName.length).toLowerCase();
    if (extFile=="mp4") {
      const date = dateNow()
      const newMessage = new MessageClass(nowOnline.onlineUser.username, video, "video", date, nowOnline.onlineUser.picture)
      currentUserChat.lastMessage = "video";
      afterMessage(newMessage, "video",date);
    }else{
       alert('invalid')
    }   
  }
  


  function startRecord() {
    document.getElementById('recordPlay').src = null;

    let audioIN = { audio: true };
    //  audio is true, for recording
 
    // Access the permission for use
    // the microphone
    navigator.mediaDevices.getUserMedia(audioIN)
 
      // 'then()' method returns a Promise
      .then(function (mediaStreamObj) {
        
        // Connect the media stream to the
        // first audio element
        let audio = document.getElementById('recordPlay');
        //returns the recorded audio via 'audio' tag
 
        // 'srcObject' is a property which
        // takes the media object
        // This is supported in the newer browsers
        if ("srcObject" in audio) {
          audio.srcObject = mediaStreamObj;
        }
        else {   // Old version
          audio.src = window.URL
            .createObjectURL(mediaStreamObj);
        }
 
        // It will play the audio
        audio.onloadedmetadata = function (ev) {
 
          // Play the audio in the 2nd audio
          // element what is being recorded
          
        };
 
        // Start record
        let start = document.getElementById('btnStart');
 
        // Stop record
        let stop = document.getElementById('btnStop');
 
        // 2nd audio tag for play the audio
        let playAudio = document.getElementById('adioPlay');
 
        // This is the main thing to recorded
        // the audio 'MediaRecorder' API
        let mediaRecorder = new MediaRecorder(mediaStreamObj);
        // Pass the audio stream
 
        // Start event
        start.addEventListener('click', function (ev) {
          audio.src = null;
          audio.play();
          mediaRecorder.start();
          // console.log(mediaRecorder.state);
        })
 
        // Stop event
        stop.addEventListener('click', function (ev) {
          mediaRecorder.stop();
          // console.log(mediaRecorder.state);
          audio.pause();
          audio.stop();
        });
 
        // If audio data available then push
        // it to the chunk array
        mediaRecorder.ondataavailable = function (ev) {
          dataArray.push(ev.data);
        }
 
        // Chunk array to store the audio data
        let dataArray = [];
 
        // Convert the audio data in to blob
        // after stopping the recording
        mediaRecorder.onstop = function (ev) {
          // blob of type mp3
          let audioData = new Blob(dataArray,
                    { 'type': 'audio/mp3;' });
           
          // After fill up the chunk
          // array make it empty
          dataArray = [];
 
          // Creating audio url with reference
          // of created blob named 'audioData'
          let audioSrc = window.URL
              .createObjectURL(audioData);
 
          // Pass the audio url to the 2nd video tag
          playAudio.src = audioSrc;

          audioIN[audio] = false;
          setLastRecord(playAudio.src);
        }
      })
 
      // If any error occurs then handles the error
      .catch(function (err) {
        console.log(err.name, err.message);
      });
    }

    function resetRecord() {
      document.getElementById('adioPlay').src = null;
    }

    function newRecordMessage() {
    if(lastRecord == "") {
      return;
    }
      const date = dateNow()
      const newMessage = new MessageClass(nowOnline.onlineUser.username, lastRecord, "audio", date, nowOnline.onlineUser.picture)
      currentUserChat.lastMessage = "audio";
      afterMessage(newMessage, "audio", date);
      document.getElementById('adioPlay').src = null;
      setLastRecord("");

      //document.getElementById('recordPlay').src = null;
      //document.getElementById('recordPlay').currentTime = 0;
      //document.getElementById('recordPlay').pause();

    }

  function afterMessage(newMessage,lastMessage, date) {
    currentUserChat.messages.push(newMessage);
    currentUserChat.date = date;
    if(contactObject) {
      const otherUserChat = contactObject.chats.find((e) => e.username == nowOnline.onlineUser.username);
      otherUserChat.messages.push(newMessage);
      otherUserChat.lastMessage = lastMessage;
      otherUserChat.date = date;
    }
    setChatMessages(currentUserChat.messages.map((message, key) => {
      return <Message senderUserName={message.from} content={message.messageContent} nowOnline={nowOnline} type={message.messageType} date={message.messageDate} senderPicture={message.senderPicture} key={key}/>}));
    setChats(nowOnline.onlineUser.chats.map((chat, key) => {
      return <UserSideBox displayname={chat.displayName} image={chat.image} date={chat.date} lastMessage={chat.lastMessage} username={chat.username} setMessages={setChatMessages} setContact={setContactUserName} nowOnline={nowOnline} key={key}/>}));
  }

  // find the chat with the contact we push on his chat.

    // use this function only you send new message (input).
    function dateNow() {
        let currentDate = new Date();
        let minutes = currentDate.getMinutes();
        let hours = currentDate.getHours();
        let days = currentDate.getDate();
        let months = currentDate.getMonth() + 1;
        if(minutes.toString().length === 1) {
          minutes = "0" + minutes;
        }
        if(hours.toString().length === 1) {
          hours = "0" + hours;
        }
        if(days.toString().length === 1) {
          days = "0" + days;
        }
        if(months.toString().length === 1) {
          months = "0" + months;
        }
        const date = hours + ":" + minutes + " | " + days + "/" + months + "/" + currentDate.getFullYear();
        return date;
    }

  return (
    <div className="mesgs">
      <div className="msg_history">
      {/* show the messages.*/}
        {chatMessages}
      </div>

      <div className="row type_msg">
      <div className='col-xl-1 col-sm-1 col-xs-1 col' id='sendBut'>
      <button className="SendButton msg_send_btn" type="button" onClick={newTextMessage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
            </button>
            </div>

            <DropUp newPictureMessage={newPictureMessage} newVideoMessage={newVideoMessage} startRecord={startRecord} newRecordMessage={newRecordMessage} resetRecord={resetRecord}/>

            <div className='col-xl-10 col-sm-10 col-xs-10 col' id='inputRow'>
        <input type="text" className="form-control" id="messageText" placeholder="New message here..." onChange={handleChange}></input>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;

