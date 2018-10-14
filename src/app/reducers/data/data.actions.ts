import { Action } from '@ngrx/store';

export enum DataActionTypes {
  LoadData = '[Data] Load Data',
  DataLoaded = '[Data] Data Loaded'
}

export class LoadData implements Action {
  public readonly type = DataActionTypes.LoadData;
}

export class DataLoaded implements Action {
  readonly type = DataActionTypes.DataLoaded;
  constructor(
    readonly agenciesPayload: any[],
    readonly missionTypesPayload: any[],
    readonly statusTypesPayload: any[]
  ) {}
}

export type DataActions =
  LoadData |
  DataLoaded;
