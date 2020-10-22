import * as types from '../types';

const initialState = {
    error: {
        requesting: false,
        error: null,
        success: false,
        card: {},
    }
}

const error = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_ERROR:
            return {
                ...state,
                error: {
                    ...state.error,
                    error: action.payload
                }
            }
        default: 
            return state;
    }
}

export default error;