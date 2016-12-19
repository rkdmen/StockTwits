import React from 'react';
import { connect } from 'react-redux';
import reactStringReplace from 'react-string-replace';


class SingleUserMsg extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
      return(
        <div>
          <p className="singleMsgByUserId">{!this.props.userMsg? "" : <span>Twits by {this.props.userMsg.selectedUser}</span>}</p>
          <div className='main-messageByUser'>
          {
            !this.props.userMsg ? <span>Select User to See Messages</span> :
            this.props.userMsg.msgByUser.map((msg, i) =>{
              return (
                <div className="singleMsgByUser" key={i}>{
              reactStringReplace(msg.body, /([$])+/g, (match, i) => (
              <span key={i} className="dollarSymbol" >{match}</span>))
            }</div>
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
      userMsg: state.reducer.userMsg
    }
}

export default connect(mapStateToProps, null)(SingleUserMsg);

