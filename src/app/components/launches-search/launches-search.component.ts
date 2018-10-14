import { Component, OnInit } from '@angular/core';
import { Criterion } from 'app/models';
import { LaunchesService } from 'app/services';

import { CriterionTypes } from 'app/models';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { LoadLaunches } from 'app/reducers/launches';

@Component({
  selector: 'app-launches-search',
  templateUrl: './launches-search.component.html',
  styleUrls: ['./launches-search.component.scss']
})
export class LaunchesSearchComponent implements OnInit {
  private launches: any[];
  public filteredLaunches: any[] = [];

  constructor(private launchesService: LaunchesService,
              private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadLaunches());

    this.store
      .select('launches')
      .subscribe(state => {
        this.launches = state.launches;
      });

    this.store
      .select('search')
      .subscribe(search => {
        this.launchCriterionChange(search.criterion);
      });
  }

  private launchCriterionChange(criterion: Criterion) {

    /* If not criterion, clean launches list */
    if (!criterion) {
      this.filteredLaunches = [];
      return;
    }

    switch (criterion.type) {

      /* Filter by status types */
      case CriterionTypes.StatusTypes:
        this.filteredLaunches = this.launches.filter(
          launch => launch.status === criterion.id
        );
        break;

      /* Filter by agencies */
      case CriterionTypes.Agencies:
        this.filteredLaunches = this.launches.filter(
          launch => (
            (launch.rocket.agencies ? launch.rocket.agencies.some(agency => agency.id === criterion.id) : false) ||
            (launch.missions ? launch.missions.some(mission => (
              mission.agencies ? mission.agencies.some(agency => agency.id === criterion.id) : false)) : false) ||
            (launch.location.pads ? launch.location.pads.some(pad => (
              pad.agencies ? pad.agencies.some(agency => agency.id === criterion.id) : false)) : false)
          )
        );
        break;

      /* Filter by mission types */
      case CriterionTypes.MissionTypes:
        this.filteredLaunches = this.launches.filter(
          launch => launch.missions.some(mission => mission.type === criterion.id)
        );
        break;
    }
  }
}
