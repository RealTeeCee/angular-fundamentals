import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService, IEvent } from './shared';

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :-ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent implements OnInit {
  event: any;
  isDirty: boolean = true;
  constructor(private router: Router, private eventServices: EventsService) {}

  ngOnInit() {
    this.event = {
      name: 'Ng Spectacularr',
      date: new Date('12/12/2012'),
      time: '12 am',
      price: 12.0,
      location: {
        address: '12 a',
        city: '12St',
        country: '12 b',
      },
      onlineUrl: '12.vn',
      imageUrl: '12.vn/12.png',
    };
  }

  saveEvent(formValues) {
    this.eventServices.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
