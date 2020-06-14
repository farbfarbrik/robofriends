import { action } from 'typesafe-actions';
import { SearchFieldTypes } from './types';

export const setSearchField = (text: string) =>
  action(SearchFieldTypes.CHANGE_SEARCH_FIELD, text);
