import './SampleChat.css';

function Message({senderUserName, content, nowOnline, type,  date}) { // delete sendTo, chande object sender to string.
    
console.log(senderUserName + "  ?  " + nowOnline.onlineUser.username)

    if(senderUserName == nowOnline.onlineUser.username) {
        return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{content}</p>
                <span className="time_date">{date}</span>{" "}
            </div>
        </div>
        )
    } 
    else {
        return (
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
                <p>{content}</p>
                <span className="time_date">{date}</span>
            </div>
            </div>
        </div>
        )
    }

}

export default Message;