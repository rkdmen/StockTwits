import {renderComponent, expect} from '../test_helper';
import {stockReducer} from '../../client/reducers/stockReducer';
import {RETRIEVE_MSG, ADD_STOCK_JSON, GET_STOCK_JSON, DELETE_STOCK_JSON} from '../../client/constants/actionTypes';


describe('stock Reducers', ()=> {

  it('handles action with unknown type', ()=>{
    expect(stockReducer(undefined, {})).to.eql({});
  })

  xit('handle action type RETRIEVE_MSG', ()=> {
    const action = {
      type: RETRIEVE_MSG,
      payload:'AAPL'
    };
    expect(stockReducer({}, action)).to.eql([]);
  });

})