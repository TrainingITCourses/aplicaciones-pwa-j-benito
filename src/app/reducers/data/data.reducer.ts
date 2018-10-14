import { DataActions, DataActionTypes } from './data.actions';

export interface DataState {
  agencies: any[];
  missionTypes: any[];
  statusTypes: any[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: DataState = {
  agencies: [],
  missionTypes: [],
  statusTypes: [],
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: DataActions): DataState {
  switch (action.type) {
    case DataActionTypes.LoadData:
      return { ...state, loading: true };
    case DataActionTypes.DataLoaded:
      return {
        agencies: action.agenciesPayload,
        missionTypes: action.missionTypesPayload,
        statusTypes: action.statusTypesPayload,
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
}
