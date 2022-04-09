import './SampleChat.css';

function Message({senderUserName, content, nowOnline, type,  date ,senderPicture}) { // delete sendTo, chande object sender to string.
    

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
                src={senderPicture}
                alt="sender-picture"
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