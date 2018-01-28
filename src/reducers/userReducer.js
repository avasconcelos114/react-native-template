import { GET_CURRENT_USER } from '../actions/types';

const initialState = {
    currentUser: 'Bob Newby',
};

// initializes reducer with initialState above, and listens for action dispatches
const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_CURRENT_USER:
        return {
            ...state,
            currentUser: action.data,
        };

    default:
        return state;
    }
};

export default userReducer;
