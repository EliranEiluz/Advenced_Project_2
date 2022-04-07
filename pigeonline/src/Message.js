import './SampleChat.css';

function Message({sender, content, setChats, sendTo, nowOnline, type,  date}) {

    if(sender.username == nowOnline.onlineUser) {
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