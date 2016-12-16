import React from 'react';
import StockSearchAdd from '../containers/StockSearch/StockDetail';
import StockDetail from '../containers/StockSearch/StockSearchAdd';


class Search extends React.Component {
  render(){
    return (
        <div>
          <StockDetail />
          <StockSearchAdd />
        </div>
      )
  }
}

export default Search;
