import { ADD_STOCK_WATCHLIST } from '../constants/ActionTypes';

export function stockReducer(state = {}, action) {
  console.log(action.payload, ' payload!')
    switch (action.type) {

        case ADD_STOCK_WATCHLIST:
            return Object.assign({}, state, {
              symbol: action.payload.data.symbol.symbol,
              title: action.payload.data.symbol.title,
              messages: action.payload.data.messages
            })
        default:
            return state;
    }
}
