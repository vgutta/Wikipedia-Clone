import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Image } from '../../../models/ud-pages';
import { Observable } from 'rxjs';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-choose-existing-image',
  templateUrl: './choose-existing-image.component.html',
  styleUrls: ['./choose-existing-image.component.css']
})
export class ChooseExistingImageComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();
  @Output() done = new EventEmitter<string>();
  images: Observable<Image[]>;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getListing();
  }

}
