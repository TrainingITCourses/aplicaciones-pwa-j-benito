import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'environments/environment';
import * as fromSearch from './search';
import * as fromLaunches from './launches';
import * as fromData from './data';

export interface State {
  search: fromSearch.SearchState;
  launches: fromLaunches.LaunchesState;
  data: fromData.DataState;
}

export const reducers: ActionReducerMap<State> = {
  search: fromSearch.reducer,
  launches: fromLaunches.reducer,
  data: fromData.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
