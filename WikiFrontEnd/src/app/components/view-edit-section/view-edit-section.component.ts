import { Component, OnInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Section } from 'src/app/models/ud-pages';
import { MatDrawer } from '@angular/material';
import { take } from 'rxjs/operators';

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

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
  }

  changeDrawer(newOpen: boolean) {
    this.isOpen = newOpen;
    this.updateHeight();
  }

  updateHeight() {
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      if (this.isOpen) {
        this.minHeight = this.theDrawer.nativeElement.offsetHeight + 'px';
      } else {
        this.minHeight = '0px';
      }
    });
  }

}
