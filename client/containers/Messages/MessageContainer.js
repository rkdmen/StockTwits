import React, {Component} from 'react';
import { Button, Panel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageDetails from './MessageDetailContainer' ;

class MessageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentStock: '',
          title: ''
        }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({currentStock:nextProps.stock.symbol, title: nextProps.stock.title});
    }
    render() {
     let showTitle;
     let showSymbol;
      if(this.state.title){
        showTitle = (<h4>{this.state.title}</h4>);
        showSymbol = (<h5>{this.state.currentStock}</h5>);
      }
        return (
          <div className="message-container">
          {showTitle}
          {showSymbol}
          {!this.props.message ? 'No Stock Selected':
            this.props.message.map((msg, i)=>{
             return (
               <MessageDetails
               key={i}
               message={msg.body}
               mentioned={msg.mentioned_users}
               user={msg.user.username}
               time={msg.created_at}
               avatar={msg.user.avatar_url}
               source={msg.source.title}
               entities={msg.entities}
               />
              )
            })
          }

          </div>
          )
    }
}

function mapStateToProps(state) {
    return {
      message: state.reducer.stock.messages,
      stock: state.reducer.stock
    }
}


export default connect(mapStateToProps, null)(MessageContainer);
