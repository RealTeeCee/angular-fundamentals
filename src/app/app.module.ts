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
  UpvoteComponent,
  VoterService,
  LocationValidator,
} from './events/index';

import {
  JQ_TOKEN,
  ModalTriggerDirective,
  SimpleModalComponent,
  TOASTR_TOKEN,
  Toastr,
  collapsibleWellComponent,
} from './common/index';

import { AuthService } from './user/auth.service';

import { Error404Component } from './error/404.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';

let toastr: Toastr = window['toastr'];
let jquery = window['$'];

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
    SimpleModalComponent,
    Error404Component,
    UpvoteComponent,

    ModalTriggerDirective,
    LocationValidator,

    DurationPipe,
  ],
  providers: [
    // {provide: EventsService, useClass: EventsService}, this is long-hand code
    EventsService, // short-hand code of above
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jquery },
    EventRouteActivator,
    EventListResolver,
    VoterService,
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
