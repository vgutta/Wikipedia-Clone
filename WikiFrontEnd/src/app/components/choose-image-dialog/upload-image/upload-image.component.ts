import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();
  @Output() done = new EventEmitter<string>();
  fileInfo: File;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  changed(event: Event) {
    this.fileInfo = (event.target as HTMLInputElement).files[0];
  }

  submit(input: HTMLInputElement) {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.imageService.uploadImage(input.files[0].type, reader.result as ArrayBuffer)
        .subscribe(x => this.done.emit(x));
    };
    reader.readAsArrayBuffer(input.files[0]);
  }

}
