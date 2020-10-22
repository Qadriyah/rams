import { combineReducers } from 'redux';
import error from './errorReducer';

const appReducer = combineReducers({
    error: error
});

export default (state, action) => {
    if (action.type === 'CLEAR_STORE') {
        state = undefined;
    }
    return appReducer(state, action);
};