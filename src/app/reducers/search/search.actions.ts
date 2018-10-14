import { Action } from '@ngrx/store';
import { Criterion } from 'app/models';

export enum SearchActionTypes {
  LoadCriterion = '[Search] Load Criterion'
  // LoadLaunches = '[Global] LoadLaunches'
}

export class LoadCriterion implements Action {
  readonly type = SearchActionTypes.LoadCriterion;
  constructor(public readonly payload: Criterion) {}
}

// export class LoadLaunches implements Action {
//   readonly type = SearchActionTypes.LoadLaunches;
//   constructor(public readonly payload: any[]) {}
// }

export type SearchActions = LoadCriterion;
