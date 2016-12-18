import React, {Component} from 'react';
import { Button, Panel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageDetails from './MessageDetailContainer' ;
import {  } from '../../actions/searchActions';


class MessageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentStock: '',
          title: ''
        }
    }

    componentWillReceiveProps(nextProps) {
      console.log(nextProps, ' Message Next Prop');
      this.setState({currentStock:nextProps.stock.symbol, title: nextProps.stock.title});
    }
    render() {
     let showTitle;
      if(this.state.title){
        showTitle = (<h4>{this.state.title}, {this.state.currentStock}</h4>);
      }
        return (
          <div>
          {showTitle}
          {!this.props.message ? 'No Stock Selected':
            this.props.message.map((msg, i)=>{
             return (
               <MessageDetails
               message={msg.body}
               user={msg.user.username}
               time={msg.created_at}
               key={i}
               />
              )
            })
          }

          </div>
          )
    }
}

function mapStateToProps(state) {
  console.log(state, ' Message state')
    return {
      message: state.reducer.stock.messages,
      stock: state.reducer.stock
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
