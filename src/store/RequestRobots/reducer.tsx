import { Reducer } from 'redux';
import { RequestRobotsTypes, RequestRobotsState } from './types';

const initialState: RequestRobotsState = {
  robots: [],
  isPending: false,
  error: '',
};

const reducer: Reducer<RequestRobotsState> = (state = initialState, action) => {
  switch (action.type) {
    case RequestRobotsTypes.REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case RequestRobotsTypes.REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: action.payload,
        isPending: false,
      };
    case RequestRobotsTypes.REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false,
      };
    default:
      return state;
  }
};

export { reducer as RequestRobotsReducer };
