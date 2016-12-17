import React, {Component} from 'react';
import { Button, Panel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  } from '../../actions/searchActions';

class StockDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
          <div>

          </div>
          )
    }
}

function mapStateToProps(state) {
  console.log(state, ' stockdetail state')
    return {

    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StockDetail);
