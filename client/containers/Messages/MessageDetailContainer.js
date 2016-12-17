import React, {Component} from 'react';
import { Button, Panel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  } from '../../actions/searchActions';


class MessageDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        // console.log(this.props, ' this props in messageDetail')

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
      console.log(nextProps, ' MessageDetail Next Prop');
    }

    render() {
    const UTCtoLocal = (dateInput) => {
      let offset = 5; // EST - UTC offset: 5 hours
      let date = new Date(dateInput);
      let utc = date.getTime() - (date.getTimezoneOffset() * 60000);
        //apply the offset between UTC and EST (5 hours)
        //3600000 milliseconds = 3600 seconds = 60 minutes = 1 hour
      let etc = new Date(utc + (3600000 * offset));
      return etc.toLocaleString();
      }
        return (
          <div>
            <h5>{this.props.user}</h5>
            <p>{this.props.message}</p>
            <p>{UTCtoLocal(this.props.time)}</p>
            <hr/>
          </div>
          )
    }
}

function mapStateToProps(state) {
  console.log(state, ' MessageDetails state')
    return {
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageDetails);
