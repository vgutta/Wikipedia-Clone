import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();
  @Output() done = new EventEmitter<string>();
  fileInfo: File;

  constructor() { }

  ngOnInit() {
  }

  check(fileInput: HTMLInputElement) {
    return 0;
  }

  changed(event: Event) {
    this.fileInfo = (event.target as HTMLInputElement).files[0];
  }

}
