import { combineReducers } from 'redux';
import userReducer from './userReducer';

// Combine all reducers created in this directory (must import and register them below)
const rootReducer = combineReducers({
    userReducer,
});

export default rootReducer;
