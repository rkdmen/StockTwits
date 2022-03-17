import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import reactStringReplace from "react-string-replace";
import { getUserMsg } from "../../actions/searchActions";

class MessageDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  UTCtoLocal(dateInput) {
    let offset = 5; // EST - UTC offset: 5 hours
    let date = new Date(dateInput);
    let utc = date.getTime() - date.getTimezoneOffset() * 60000;
    //apply the offset between UTC and EST (5 hours)
    //3600000 milliseconds = 3600 seconds = 60 minutes = 1 hour
    let etc = new Date(utc + 3600000 * offset);
    return etc.toLocaleString();
  }

  isItBullishBearish(prop) {
    //checks if user tweeted as Bullish or Bearish
    //if null, it will not do anything
    if (prop?.basic === "Bullish") {
      return <span className="bullish">Feeling Bullish ↗🐮</span>;
    }
    if (prop?.basic === "Bearish") {
      return <span className="bearish">Feeling Bearish ↘🐻</span>;
    }
  }

  clickUser(user) {
    //Click user name, retrieve specific user's previous twits
    this.props.getUserMsg(user);
  }

  render() {
    return (
      <div className="messageDetailContainer">
        <p onClick={() => this.clickUser(this.props.user)}>
          <span className="userName">{this.props.user}</span>
          <span className="mentionedUser">
            &nbsp;&nbsp;&nbsp;{this.props.mentioned}
          </span>
          <span className="viaSource">via {this.props.source}</span>
        </p>
        <div>
          <span>
            <img src={this.props.avatar} alt="avatar" />
          </span>
        </div>
        <p className="messageDetail">
          {//Finds $ symbol and add bold class to it.
          reactStringReplace(this.props.message, /([$])+/g, (match, i) => (
            <span key={i} className="dollarSymbol">
              {match}
            </span>
          ))}
        </p>
        <span> {this.isItBullishBearish(this.props.entities.sentiment)}</span>
        <p className="timeStamp">{this.UTCtoLocal(this.props.time)}</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserMsg }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(MessageDetails);