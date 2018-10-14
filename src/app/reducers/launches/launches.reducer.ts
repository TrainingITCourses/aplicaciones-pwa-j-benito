import { LaunchesActionTypes, LaunchesActions } from './launches.actions';

export interface LaunchesState {
  launches: any[];
  loading: boolean;
}

export const initialState: LaunchesState = {
  launches: [],
  loading: false
};

export function reducer(state = initialState, action: LaunchesActions): LaunchesState {
  switch (action.type) {
    case LaunchesActionTypes.LoadLaunches:
      return { ...state, loading: true };
    case LaunchesActionTypes.LaunchesLoaded:
      return { loading: false, launches: action.payload };
    default:
      return state;
  }
}
