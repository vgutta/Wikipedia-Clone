import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/ud-pages';

@Component({
  selector: 'app-selectable-image',
  templateUrl: './selectable-image.component.html',
  styleUrls: ['./selectable-image.component.css']
})
export class SelectableImageComponent {
  @Input() imageId: Image;
  @Input() selected: boolean;

  constructor() { }
}
