import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Section } from 'src/app/models/ud-pages';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-view-edit-section',
  templateUrl: './view-edit-section.component.html',
  styleUrls: ['./view-edit-section.component.css']
})
export class ViewEditSectionComponent implements OnInit {
  @ViewChild('theDrawer') theDrawer: ElementRef<HTMLDivElement>;
  @ViewChild('theTextarea') theTextarea: ElementRef<HTMLDivElement>;
  @Input() section: Section;
  public isOpen = false;
  public minHeight = '0px';

  constructor() { }

  ngOnInit() {
  }

  changeDrawer(newOpen: boolean) {
    this.isOpen = newOpen;
    this.updateHeight();
  }

  updateHeight() {
    if (this.isOpen) {
      this.minHeight = this.theDrawer.nativeElement.offsetHeight + 'px';
    } else {
      this.minHeight = '0px';
    }
  }

}
