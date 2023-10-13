import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  template: ` <div class="well hoverwell thumbnail">
    <h2>{{ event?.name }}</h2>
    <div>Date: {{ event?.date }}</div>
    <!-- *************** CLASS BINDING ***************
    <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">

    1/ Using ngClass 
      <div [ngClass]="{
        green: event?.time === '8:00 am',
        bold: event?.time === '8:00 am'
      }"
      [ngSwitch]="event?.time"
    >

    2/ Refactor ngClass with function
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time"> -->

    <!-- *************** STYLE BINDING ***************
      <div
      [style.color]="event?.time === '8:00 am' ? '#003300' : '#bbb'"
      [ngSwitch]="event?.time"
    > 
    1/ Using ngStyle 
    <div
      [ngStyle]="{
        color: event?.time === '8:00 am' ? '#003300' : '#bbb',
        'font-weight': event?.time === '8:00 am' ? 'bold' : 'normal'
      }"
      [ngSwitch]="event?.time"
    > -->
    <div
      style="box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      padding: 5px;
      margin-top: 5px;
      margin-bottom: 5px;
      border-radius: 5px;"
      [ngStyle]="getStartTimeStyle()"
      [ngSwitch]="event?.time"
    >
      Time: {{ event?.time }}
      (
      <span *ngSwitchCase="'8:00 am'">Early Start</span>
      <span *ngSwitchCase="'10:00 am'">Late Start</span>
      <span *ngSwitchDefault>Normal Start</span>
      )
    </div>

    <div>Price: \${{ event?.price }}</div>
    <div *ngIf="event?.location">
      <!-- <div [hidden]="!event?.location"> -->
      <span>Location: {{ event?.location?.address }}</span>

      <span class="pad-left"
        >{{ event?.location?.city }}, {{ event?.location?.country }}</span
      >
    </div>
    <!-- <div [hidden]="!event?.onlineUrl"> -->
    <div *ngIf="event?.onlineUrl">
      {{ event?.onlineUrl }}
    </div>
  </div>`,
  styles: [
    `
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: bold;
      }
      .thumbnail {
        min-height: 240px;
      }
      .pad-left {
        margin-left: 8px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventsThumbnailComponent {
  @Input() event: any;

  // getStartTimeClass() {
  //   const isEarlyStart = this.event && this.event.time === '8:00 am';
  //   return { green: isEarlyStart, bold: isEarlyStart };
  // }

  // getStartTimeClass() {
  //   if (this.event && this.event.time === '8:00 am') {
  //     return 'green bold';
  //   }
  //   return '';
  // }

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return { color: '#003300', 'font-weight': 'bold' };
    }
    return {};
  }
}
