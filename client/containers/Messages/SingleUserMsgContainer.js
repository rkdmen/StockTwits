import React from 'react';
import { connect } from 'react-redux';
import reactStringReplace from 'react-string-replace';


class SingleUserMsg extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        didReceivedStockMsg: false
      }
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.stockMsg){
        this.setState({didReceivedStockMsg:true})
      }
    }
      UTCtoLocal(dateInput) {
        let offset = 5; // EST - UTC offset: 5 hours
        let date = new Date(dateInput);
        let utc = date.getTime() - (date.getTimezoneOffset() * 60000);
        //apply the offset between UTC and EST (5 hours)
        //3600000 milliseconds = 3600 seconds = 60 minutes = 1 hour
        let etc = new Date(utc + (3600000 * offset));
        return etc.toLocaleString();
      }

    render(){
      let selectUserSpan;
      if(this.state.didReceivedStockMsg){
        selectUserSpan = ("Select User to See Messages");
      }
      return(
        <div>
          <p className="singleMsgByUserId">{!this.props.userMsg? <span className="selectUserToSeeMore">{selectUserSpan}</span> : <span>Twits by {this.props.userMsg.selectedUser}</span>}</p>
          <div className='main-messageByUser'>
          {
            !this.props.userMsg ? '' :
            this.props.userMsg.msgByUser.map((msg, i) =>{
              return (
                <div className="singleMsgByUser" key={i}>{
              reactStringReplace(msg.body, /([$])+/g, (match, i) => (
              <span key={i} className="dollarSymbol" >{match}</span>))

            }
            <p className='timeStamp'>{this.UTCtoLocal(msg.created_at)}</p>
            <hr/>
            </div>
                )

            })
          }
          </div>
        </div>
        )
    }
}


function mapStateToProps(state) {

    return {
      stockMsg: state.reducer.stock.messages,
      userMsg: state.reducer.userMsg
    }
}

export default connect(mapStateToProps, null)(SingleUserMsg);

