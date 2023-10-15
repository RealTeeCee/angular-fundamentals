import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Component({
  selector: 'simple-modal',
  template: `
    <div id="{{ elementId }}" #modalcontainer class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal">
              <span>&times;</span>
            </button>
            <h4 class="modal-title">{{ title }}</h4>
          </div>
          <div (click)="closeModal()" class="modal-body">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-body {
        height: 250px;
        overflow-y: scroll;
      }
    `,
  ],
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;

  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  ngOnInit() {}

  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}
