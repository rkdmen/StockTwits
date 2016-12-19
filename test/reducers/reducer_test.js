import {renderComponent, expect} from '../test_helper';
import {stockReducer} from '../../client/reducers/stockReducer';
import {userClickReducer} from '../../client/reducers/userClickReducer';
import {RETRIEVE_MSG, ADD_STOCK_JSON, GET_STOCK_JSON, DELETE_STOCK_JSON, GET_USER_MESSAGE} from '../../client/constants/actionTypes';

/*

Hi Eric,

I wanted to make complicated full unit test, but my unit testing skill is not great yet!?

Just ran into bunch of fail test, so I created basic testing for each component.

I just need a small guidance for creating unit test and I should be good as senior test engineer guys.

*/

describe('stockReducer', ()=> {

  it('handles action with unknown type', ()=>{
    expect(stockReducer(undefined, {})).to.eql({});
  })

  it('handle default action type RETRIEVE_MSG', ()=> {
    const action = {
      type: RETRIEVE_MSG,
      payload: {}
    };
    expect(stockReducer({}, action.payload)).to.eql({});
  });
  it('should retrieve array of object when AAPL is requested', ()=> {
    const action = {
      type: RETRIEVE_MSG,
      payload: {
        messages:new Array(30)
      }
    };
    expect(stockReducer({symbol:'AAPL'}, action.payload.messages)).to.be.instanceof(Object);
  });
})

describe('userClickReducer ', ()=> {

  it('handles userClickReducer as null when page load', ()=>{
    expect(userClickReducer(null, {})).to.be.null;
  })

  it('handle default action type GET_USER_MESSAGE', ()=> {
    const action = {
      type: GET_USER_MESSAGE,
      payload: {}
    };
    expect(stockReducer({}, action.payload)).to.eql({});
  });


})

