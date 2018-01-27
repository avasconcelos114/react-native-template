import { GET_CURRENT_USER, REGISTER_NEW_USER } from '../actions/types';

const initialState = {
    userList: [{ name: 'Andre Vasconcelos' }],
    currentUser: 'Bob',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case REGISTER_NEW_USER:
        return {
            ...state,
            userList: userList.push(action.data),
        };

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
