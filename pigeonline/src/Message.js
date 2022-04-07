import './SampleChat.css';

function Message({sender, content}) {

function dateNow() {
    const currentDate = new Date();
    const date = currentDate.getHours() + ":" + currentDate.getMinutes() +
    "|" + currentDate.getDay() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
    return date;
}

    if(sender == "I") {
return (
<div className="outgoing_msg">
          <div className="sent_msg">
            <p>{content}</p>
            <span className="time_date">{dateNow()}</span>{" "}
          </div>
        </div>
)
    } else {
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
        <span className="time_date">{dateNow()}</span>
      </div>
    </div>
  </div>
        )
    }

}

export default Message;