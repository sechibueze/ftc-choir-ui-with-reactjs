import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, SET_CURRENT_USER_ID, USER_LOADING, LOGOUT } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('https://ftc2020-api.herokuapp.com/api/v1/auth/signup', userData)
        .then(res => {
            console.log('signupresponse', res)
            if (res.data.status) {
                history.push('/login')
            } else {
                history.push('/signup')
            }

        })

        // re-direct to login on successful register
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            }),
        );
};

// Login - get user token
export const loginUser = (userData, history) => dispatch => {
    console.log('user login data', userData)
    axios
        .post('https://ftc2020-api.herokuapp.com/api/v1/auth/login', userData)
        .then(async res => {
            console.log('loginResponse', res.data)
            // Save to localStorage
            // Set token to localStorage
            if (res.data.status) {
                const { token } = res.data;

                // Set token to Auth header
                // setAuthToken(token);
                // Decode token to get user data
                const decoded = jwt_decode(token);
                console.log('decode loggedin user', decoded.user.id)
                // Set current 
                localStorage.setItem('userId', decoded.user.id)
                //find User
                const { user } = res.data;
                dispatch(setCurrentUser(user));

                history.push('/dashboard')
            } else {
                history.push('/login')
            }

        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.message
            }),
        );
};
// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    };
};

export const setCurrentUserId = decoded => {
    return {
        type: SET_CURRENT_USER_ID,
        payload: decoded,
    };
};
// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING,
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch({
        type: LOGOUT
    });
};