import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsAppComponent } from './events-app.component';

import {
  EventListResolver,
  EventRouteActivator,
  EventsListComponent,
  EventsThumbnailComponent,
  EventsDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  EventsService,
  DurationPipe,
} from './events/index';

import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { collapsibleWellComponent } from './common/collapsible-well.component';

import { AuthService } from './user/auth.service';

import { Error404Component } from './error/404.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';

declare let toastr: Toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventsDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    collapsibleWellComponent,
    Error404Component,

    DurationPipe,
  ],
  providers: [
    // {provide: EventsService, useClass: EventsService}, this is long-hand code
    EventsService, // short-hand code of above
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(compnent: CreateEventComponent) {
  if (compnent.isDirty) {
    return window.confirm(
      'You have not save this event, do you really want to cancel?'
    );
  }
  return true;
}
