import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/event.service';

import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';
@Component({
  templateUrl: './events-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 100px;
      }
    `,
  ],
})
export class EventsDetailsComponent implements OnInit {
  event: IEvent | undefined;
  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.event = this.eventsService.getEvent(+this.route.snapshot.params['id']);
  }
}
