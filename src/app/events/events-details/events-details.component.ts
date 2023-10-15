import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/event.service';

import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared';
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
      a {
        cursor: pointer;
      }
    `,
  ],
})
export class EventsDetailsComponent implements OnInit {
  event: IEvent | undefined;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';
  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventsService.getEvent(+params['id']);
      this.addMode = false;
    });

    // this.event = this.eventsService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    let sessionsArr = this.event?.sessions.map((s) => s.id);
    if (sessionsArr) {
      const validSessions = sessionsArr
        .filter((id) => typeof id === 'number')
        .map((num) => num as number);
      const nextId = Math.max(...validSessions);
      session.id = nextId + 1;
      this.event?.sessions.push(session);
      this.eventsService.updateEvent(this.event);
      this.addMode = false;
    }
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
