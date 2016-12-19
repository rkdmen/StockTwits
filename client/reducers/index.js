import { combineReducers } from 'redux';
import { stockReducer } from './stockReducer';
import { userClickReducer } from './userClickReducer';

const rootReducer = combineReducers({
  stock: stockReducer,
  userMsg: userClickReducer
});

export default rootReducer;
