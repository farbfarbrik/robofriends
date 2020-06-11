import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';
import { callApi } from './api/api';

// export const setSearchField = (text) => {
//   return {
//     type: CHANGE_SEARCH_FIELD,
//     payload: text,
//   };
// };

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  const url = 'https://jsonplaceholder.typicode.com/users';
  callApi(url)
    .then((data) => {
      return dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
    })
    .catch((error) => {
      return dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
    });
};
