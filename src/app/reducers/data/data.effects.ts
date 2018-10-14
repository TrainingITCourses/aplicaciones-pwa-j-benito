import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { DataLoaded, DataActionTypes } from './data.actions';
import { LaunchesService } from 'app/services';
import { forkJoin } from 'rxjs';

@Injectable()
export class DataEffects {
  @Effect()
  public load$ = this.actions$
    .ofType(DataActionTypes.LoadData)
    .pipe(
      mergeMap(() =>
        forkJoin(
          this.launchesService.getAgencies$(),
          this.launchesService.getMissionTypes$(),
          this.launchesService.getStatusTypes$()
        )
        .pipe(map(([agencies, missionTypes, statusTypes]) =>
          new DataLoaded(agencies, missionTypes, statusTypes))
        )
      )
    );

  constructor(private actions$: Actions,
              private launchesService: LaunchesService) {}
}
