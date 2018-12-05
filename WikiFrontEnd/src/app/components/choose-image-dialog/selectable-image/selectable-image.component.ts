import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Image } from 'src/app/models/ud-pages';
import { MatButtonToggleChange } from '@angular/material';

@Component({
  selector: 'app-selectable-image',
  templateUrl: './selectable-image.component.html',
  styleUrls: ['./selectable-image.component.css']
})
export class SelectableImageComponent {
  @Input() imageId: Image;
  @Input() selected: boolean;
  @Output() selectedEvent: EventEmitter<SelectableImageComponent> = new EventEmitter();

  constructor() { }

  changed(x: MatButtonToggleChange) {
    this.selected = x.source.checked;
    this.selectedEvent.emit(x.source.checked ? this : null);
  }
}
