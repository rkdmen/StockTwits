import * as type from '../constants/ActionTypes';

export function stockReducer(state = {}, action) {
  // console.log(action.payload, ' payload!')
    switch (action.type) {
      case type.RETRIEVE_MSG:
        if(action.payload.data.symbol === undefined){
          return Object.assign({}, state, {
            })
        };
        return Object.assign({}, state, {
          symbol: action.payload.data.symbol.symbol,
          title: action.payload.data.symbol.title,
          messages: action.payload.data.messages
        });
      case type.GET_STOCK_JSON:
        return Object.assign({}, state, {
          mySymbol: action.payload.data
        });
      case type.DELETE_STOCK_JSON:
        return Object.assign({}, state, {
        });

      default:
          return state;
    }
}
