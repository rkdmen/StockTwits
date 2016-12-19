import React, {Component} from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSymbolJSON, retriveMsg, addStockToJSON } from '../../actions/searchActions';

class StockSearchAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
          symbol: '',
          currentStock: '',
          title: ''
        }
      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e){
     e.preventDefault();
     this.setState({symbol: e.target.value});
    }

    onFormSubmit(e){
     e.preventDefault();
     this.props.retriveMsg(this.state.symbol)
     .then(()=>{
       this.props.addStockToJSON(this.state.symbol.toUpperCase())

       .then(()=>
          this.props.getSymbolJSON()
        )
     })
     .then(()=>{
       this.setState({symbol:''});
     })
    }

    render() {
        return (
          <Form onSubmit={this.onFormSubmit} >
            <FormControl
              className='searchBar'
              placeholder="Search SYMBOL"
              onChange={this.onInputChange}
              value={this.state.symbol}
              type="text"
            />
            <Button className="watch-btn" type="submit">WATCH</Button>
          </Form>
          )
    }
}

function mapStateToProps(state) {
    return {
      stock: state.reducer.stock
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSymbolJSON, retriveMsg, addStockToJSON }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StockSearchAdd);
