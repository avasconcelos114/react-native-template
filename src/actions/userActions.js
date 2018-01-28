import { GET_CURRENT_USER } from './types';

/*
 * A simple action that will receive
 * the value of a user's name, and dispatch it to userReducer
 */
export const getCurrentUser = (userData) => {
    return (dispatch) => {
        dispatch({
            type: GET_CURRENT_USER,
            data: userData,
        });
    };
};
