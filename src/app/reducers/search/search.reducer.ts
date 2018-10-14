import { Criterion } from 'app/models';
import { SearchActionTypes, SearchActions } from './search.actions';


export interface SearchState {
  criterion: Criterion;
  // launches: any[];
}

export const initialState: SearchState = {
  criterion: null
  // launches: []
};

export function reducer(state = initialState, action: SearchActions): SearchState {
  const result = { ...state };
  switch (action.type) {
    case SearchActionTypes.LoadCriterion:
      result.criterion = action.payload;
      break;
    // case SearchActionTypes.LoadLaunches:
    //   result.launches = action.payload;
    //   break;
    default:
      return state;
  }
  return result;
}
