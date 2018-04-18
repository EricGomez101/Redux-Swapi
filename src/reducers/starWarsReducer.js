import { FETCHING_SWAPI, SWAPI_FETCH_SUCCESS, SWAPI_FETCH_ERROR } from "../actions";

const initialState = {chars: [],fetching: false,fetched: false,error: ''};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_SWAPI:
      return Object.assign({}, state, { fetching: true });
    case SWAPI_FETCH_SUCCESS:
      return Object.assign({}, state, {
        chars: action.payload,
        fetching: false,
        fetched: true,
      });
    case SWAPI_FETCH_ERROR:
      return Object.assign({}, state, {
        fetching: false,
        fetched: false,
        error: 'error fetching',
      });
    default:
      return state;
  }
};
