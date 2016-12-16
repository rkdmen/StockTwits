import { combineReducers } from 'redux';
import { stockReducer } from './stockReducer';

const rootReducer = combineReducers({
  stock: stockReducer
});

export default rootReducer;
