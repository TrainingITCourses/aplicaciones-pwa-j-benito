import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import * as component from './components';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'app/reducers';
import { ServiceWorkerModule } from '@angular/service-worker';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        component.LaunchesSearchComponent,
        component.LaunchesCriteriaComponent,
        component.LaunchesCounterComponent,
        component.LaunchesListComponent,
        component.CriterionTypesComponent,
        component.CriterionResultsComponent,
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        ServiceWorkerModule.register('', {enabled: false})
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
