import './SampleChat.css';

function Message({senderUserName, content, nowOnline, type,  date ,senderPicture}) { // delete sendTo, chande object sender to string.
    
    if(type == "text") {
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

    else if(type == "image") {
        if(senderUserName == nowOnline.onlineUser.username) {
            return (
                <div className="outgoing_msg">
                    <div className="sent_msg">
                        <p><img src={content}></img></p>
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
                <p><img src={content}></img></p>
                    <span className="time_date">{date}</span>
                </div>
                </div>
            </div>
            )
        }

    }
    else if(type == "video") {
        if(senderUserName == nowOnline.onlineUser.username) {
            return (
                <div className="outgoing_msg">
                    <div className="sent_msg">
                        <p><video className="videoWrapper" controls><source src={content} type="video/mp4"></source></video></p>
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
                <p><video controls><source src={content} type="video/mp4"></source></video></p>
                    <span className="time_date">{date}</span>
                </div>
                </div>
            </div>
            )
        }

    }

    else if(type == "audio") {
        if(senderUserName == nowOnline.onlineUser.username) {
            return (
                <div className="outgoing_msg">
                    <div className="sent_msg">
                    <p><audio controls><source src={content} type="audio/mp3"></source></audio></p>
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
                <p><audio controls><source src={content} type="audio/mp3"></source></audio></p>
                    <span className="time_date">{date}</span>
                </div>
                </div>
            </div>
            )
        }

    }
}

export default Message;