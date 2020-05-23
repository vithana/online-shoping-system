import { GET_ERRORS, GET_CART_ERRORS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case GET_CART_ERRORS:
      return action.data;
    default:
      return state;
  }
}
