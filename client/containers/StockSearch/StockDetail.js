import React, {Component} from 'react';
import { Button, ButtonToolbar, Panel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSymbolJSON, deleteSymbolJSON } from '../../actions/searchActions';

class StockDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          "watchList":[]
        }
    this.deleteStockJSON = this.deleteStockJSON.bind(this);
    }

    componentDidMount() {
      this.props.getSymbolJSON();
    }

  componentWillReceiveProps(nextProps) {
      console.log(nextProps, ' nextProp StockDetail')
      this.setState({watchList:nextProps.mySymbol})
  }

  deleteStockJSON(e){
    this.props.deleteSymbolJSON(e.target.value)
    .then(()=>{
      this.props.getSymbolJSON();
    })

  }
    render() {
      console.log(this.state, ' this.state stockdetail')
        return (
          <form  className="panel-default">
            {
              this.state.watchList.map((stock, i)=>{
                return (
                  <div className="stockSymbol" key={i}>
                  {stock.symbol}&nbsp;&nbsp;
                    <span>
                        <Button onClick={this.deleteStockJSON} value={i} bsStyle='danger' bsSize="xsmall"> X </Button>
                    </span>
                    <hr/>
                  </div>
                  )
              })
            }
          </form>
          )
    }
}

function mapStateToProps(state) {
  console.log(state, ' stockdetail state');
    return {
      mySymbol : state.reducer.stock.mySymbol
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSymbolJSON, deleteSymbolJSON }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StockDetail);
