import { combineReducers } from 'redux';
import userReducer from 'src/reducers/userReducer';

const rootReducer = combineReducers({ userReducer });

export default rootReducer;