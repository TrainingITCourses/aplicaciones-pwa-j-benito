import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import * as service from 'app/services';
import * as component from 'app/components';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LaunchesEffects } from 'app/reducers/launches';
import { DataEffects } from 'app/reducers/data';

@NgModule({
  declarations: [
    AppComponent,
    component.LaunchesSearchComponent,
    component.LaunchesCriteriaComponent,
    component.LaunchesCounterComponent,
    component.LaunchesListComponent,
    component.CriterionTypesComponent,
    component.CriterionResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([DataEffects, LaunchesEffects])
  ],
  providers: [
    // service.LaunchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
