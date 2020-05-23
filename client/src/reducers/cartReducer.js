import { GET_ERRORS, GET_CART, CREATE_CART, UPDATE_CART, DELETE_CART } from "../actions/types";


const isEmpty = require("is-empty");

const initialState = {
    cart: {},
    loading: false
};

export default function(state = initialState, action) {
    console.log(action.data);
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                cart: action.data
            };

        case CREATE_CART:
            return {
                ...state,
                loading: true,
                cart: action.data
            };

        case UPDATE_CART:
            return {
                ...state,
                loading: true,
                cart: action.data
            };

        case DELETE_CART:
            return {
                ...state,
                cart: action.data
            };

        default:
            return state;
    }
}
