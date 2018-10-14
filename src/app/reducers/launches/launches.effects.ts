import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { LaunchesLoaded, LaunchesActionTypes } from './launches.actions';
import { LaunchesService } from 'app/services';

@Injectable()
export class LaunchesEffects {
  @Effect()
  public load$ = this.actions$
    .ofType(LaunchesActionTypes.LoadLaunches)
    .pipe(
      mergeMap(() =>
        this.launchesService
          .getLaunches$()
          .pipe(map(launches => new LaunchesLoaded(launches)))
      )
    );

  constructor(private actions$: Actions,
              private launchesService: LaunchesService) {}
}
