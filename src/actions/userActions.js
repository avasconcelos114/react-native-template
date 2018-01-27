import { GET_CURRENT_USER } from './types';

export const getCurrentUser = (userData) => {
    return (dispatch) => {
        dispatch({
            type: GET_CURRENT_USER,
            data: userData,
        });
    };
};
