//Action Creator test
import {renderComponent, expect} from '../test_helper';
import {retriveMsg, addStockToJSON, getSymbolJSON, deleteSymbolJSON} from '../../client/actions/searchActions';
import {RETRIEVE_MSG, ADD_STOCK_JSON, GET_STOCK_JSON, DELETE_STOCK_JSON}from '../../client/constants/actionTypes';
//ActionCreator retriveMsg, addStockToJSON, getSymbolJSON, deleteSymbolJSON

// ActionTypes = RETRIEVE_MSG, ADD_STOCK_JSON, GET_STOCK_JSON, DELETE_STOCK_JSON


describe('actions', ()=> {
  describe('retriveMsg', ()=>{
    it('has the correct type', ()=> {
      const action = retriveMsg();
      expect(action.type).to.equal(RETRIEVE_MSG)
    });
  });

  describe('addStockToJSON', ()=>{
    it('has the correct type', ()=> {
      const action = addStockToJSON();
      expect(action.type).to.equal(ADD_STOCK_JSON)
    });
  });
  describe('getSymbolJSON', ()=>{
    it('has the correct type', ()=> {
      const action = getSymbolJSON();
      expect(action.type).to.equal(GET_STOCK_JSON)
    });
  });
  describe('deleteSymbolJSON', ()=>{
    it('has the correct type', ()=> {
      const action = deleteSymbolJSON();
      expect(action.type).to.equal(DELETE_STOCK_JSON)
    });
  });


})
