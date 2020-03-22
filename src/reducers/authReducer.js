import {
    SET_CURRENT_USER,
    SET_CURRENT_USER_ID,
    USER_LOADING,
    LOGOUT
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    userId: '',
    user: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case SET_CURRENT_USER_ID:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                userId: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: {},
                userId: ''
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}