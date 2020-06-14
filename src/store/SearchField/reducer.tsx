import { Reducer } from 'redux';
import { SearchFieldTypes, SearchFieldState } from './types';

const initialState: SearchFieldState = {
  searchField: '',
};

const reducer: Reducer<SearchFieldState> = (state = initialState, action) => {
  switch (action.type) {
    case SearchFieldTypes.CHANGE_SEARCH_FIELD: {
      return { ...state, searchField: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as SearchFieldReducer };
