import React, {Component} from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addStock, addStockToJSON } from '../../actions/searchActions';

class StockSearchAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
          symbol: ''
        }
      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    componentDidMount() {
    }

    onInputChange(e){
     e.preventDefault();
     this.setState({symbol: e.target.value});
    }

    onFormSubmit(e){
     e.preventDefault();
     this.props.addStock(this.state.symbol)
     this.props.addStockToJSON(this.state.symbol)
     console.log('submitting', this.state.symbol);
     this.setState({symbol: ''});

    }

    render() {
        return (
          <Form  onSubmit={this.onFormSubmit} inline>
            <FormControl
            className='searchBar'
            placeholder="Search SYMBOL"
            onChange={this.onInputChange}
            value={this.state.symbol}
            type="text"
            />
            <Button type="submit" bsStyle="primary"> Watch </Button>
          </Form>
          )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addStock, addStockToJSON }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StockSearchAdd);
