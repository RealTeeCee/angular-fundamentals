import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EventsAppComponent } from './events-app.component';

import {
  EventListResolver,
  EventRouteActivator,
  EventsListComponent,
  EventsThumbnailComponent,
  EventsDetailsComponent,
  CreateEventComponent,
  EventsService,
} from './events/index';

import { ToastrService } from './common/toastr.service';
import { Error404Component } from './error/404.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventsDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
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
