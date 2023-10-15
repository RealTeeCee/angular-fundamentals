import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/event.service';

import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <events-thumbnail [event]="event"></events-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(
    private eventsService: EventsService,

    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.eventsService.getEvents().subscribe((events) => {
    //   this.events = events;
    // });
    this.events = this.route.snapshot.data['events'];
  }
}
