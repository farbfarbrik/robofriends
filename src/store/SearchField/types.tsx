export enum SearchFieldTypes {
  CHANGE_SEARCH_FIELD = '@@searchfield/CHANGE_SEARCH_FIELD',
}

export interface SearchFieldState {
  readonly searchField: string;
}
