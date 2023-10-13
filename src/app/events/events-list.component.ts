import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <events-thumbnail
            (click)="handleThumbnailClick(event.name)"
            [event]="event"
          ></events-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(
    private eventsService: EventsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }
  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName);
  }
}
