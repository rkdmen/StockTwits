import React, {Component} from 'react';
import { Button, ButtonToolbar, ButtonGroup, Panel,  Col, Row, Grid } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { retriveMsg, getSymbolJSON, deleteSymbolJSON } from '../../actions/searchActions';

class StockDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          watchList:[]
        }
      this.deleteStockJSON = this.deleteStockJSON.bind(this);
      this.onItemClick = this.onItemClick.bind(this);
    }

    componentDidMount() {
      this.props.getSymbolJSON();
    }

    componentWillReceiveProps(nextProps) {
      console.log(nextProps, ' nextProp StockDetail')
      this.setState({watchList:nextProps.mySymbol})
    }

    deleteStockJSON(e){
      this.props.deleteSymbolJSON(e)
      .then(()=>{
        this.props.getSymbolJSON();
      })
    }

    onItemClick(event) {
      this.props.retriveMsg(event);
    }

    render() {
      let emptyWatchList;
      if(this.state.watchList.length === 0){
        emptyWatchList = (<h4 className='watchListEmpty'>Watchlist is Empty</h4>);
      } else {
        emptyWatchList;
      }
      console.log(this.state, ' this.state stockdetail')
        return (
          <div className='symbolList'>
            {emptyWatchList}
            {
              this.state.watchList.map((stock, i)=>{
                return (
                  <div className="stockSymbol" key={i}>
                      <span className="left">
                      <a value={stock.symbol} href="#" onClick={()=> this.onItemClick(stock.symbol)}>{stock.symbol}
                      </a>
                      </span>
                      <span className="right">
                       <a className="delBtn" href="#" onClick={()=>this.deleteStockJSON(i)} value={i}>X</a>
                       </span>
                  </div>

                  )
              })
            }
          </div>
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
  return bindActionCreators({ retriveMsg, getSymbolJSON, deleteSymbolJSON }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StockDetail);
