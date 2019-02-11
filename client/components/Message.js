import React from "react";
import MessageDetail from "../containers/Messages/MessageContainer";

class Message extends React.Component {
  render() {
    return (
      <div className="main-message">
        <MessageDetail />
      </div>
    );
  }
}

export default Message;
