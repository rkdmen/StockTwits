import React, {Component} from 'react';
import { Button, Panel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageDetails from './MessageDetailContainer' ;
import {  } from '../../actions/searchActions';


class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
          <div>
          { !this.props.message ? 'No Stock Selected':
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
      message: state.reducer.stock.messages
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
