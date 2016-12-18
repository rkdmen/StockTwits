//Action Creator test
import {renderComponent, expect} from '../test_helper';
import * as actionCreator from '../../client/actions/searchActions';
import * as ActionType from '../../client/constants/actionTypes';
// RETRIEVE_MSG, ADD_STOCK_JSON, GET_STOCK_JSON, DELETE_STOCK_JSON


describe('actions', ()=> {
  describe('', ()=>{

    it('has the correct type', ()=> {
      const action = someAction('RETRIEVE_MSG');
      expect(ActionType.RETRIEVE_MSG).to.equal('RETRIEVE_MSG')
    });

    // it('has the correct payload', ()=> {
    //   const action = someAction('some value');
    //   expect(actionCreator.payload).to.equal(YourConstant)
    // });
  });
})
