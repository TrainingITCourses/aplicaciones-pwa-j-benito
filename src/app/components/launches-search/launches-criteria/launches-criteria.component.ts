import { Component, OnInit } from '@angular/core';
import { CriterionType, Criterion } from 'app/models';
import { BehaviorSubject } from 'rxjs';

import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { LoadData } from 'app/reducers/data';
import { LoadCriterion } from 'app/reducers/search';

@Component({
  selector: 'app-launches-criteria',
  templateUrl: './launches-criteria.component.html',
  styleUrls: ['./launches-criteria.component.scss']
})
export class LaunchesCriteriaComponent implements OnInit {
  public isLoaded: boolean;
  public criterionType: CriterionType;
  public criterionResults$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadData());
    this.store.select('data')
      .subscribe(data => (this.isLoaded = data.loaded));
  }

  onCriterionTypeChange(criterionType: CriterionType) {
    this.store.select('data').subscribe(data => {
      this.criterionResults$.next(data[criterionType]);
      this.store.dispatch(new LoadCriterion(null));
      this.criterionType = criterionType;
    });
  }

  onCriterionResultChange(criterionResultId: string) {
    this.store.dispatch(
      new LoadCriterion({
        type: this.criterionType,
        id: Number(criterionResultId)
      } as Criterion)
    );
  }

}
