import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions?: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions?: ISession[] = [];
  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    if (this.sessions) {
      console.log(this.filterBy);
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions?.sort(sortByNameAsc)
        : this.visibleSessions?.sort(sortByNameDesc);
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions?.slice(0);
    } else {
      this.visibleSessions = this.sessions?.filter((session) => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}
function sortByNameDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
