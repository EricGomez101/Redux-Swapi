// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_SWAPI = "FETCHING_SWAPI";
export const SWAPI_FETCH_SUCCESS = "SWAPI_FETCH_SUCCESS";
export const SWAPI_FETCH_ERROR = "SWAPI_FETCH_ERROR";
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people`
// remember that now we have controll over our thunk-based
export const fetchingSwapi = () => {
  const promise = axios.get(`https://swapi.co/api/people/`);
  return dispatch => {
    dispatch({type: FETCHING_SWAPI});
    promise
      .then(response => {
        dispatch({type: SWAPI_FETCH_SUCCESS, payload: response.data.results});

      }).catch(err => {
        console.log(err);
      })
  };
};
