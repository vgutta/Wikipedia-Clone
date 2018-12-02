import { Component, OnInit, Input, ViewChild, ElementRef, NgZone, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Section } from 'src/app/models/ud-pages';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-view-edit-section',
  templateUrl: './view-edit-section.component.html',
  styleUrls: ['./view-edit-section.component.css']
})
export class ViewEditSectionComponent implements OnInit, OnChanges {
  @ViewChild('theDrawer') theDrawer: ElementRef<HTMLDivElement>;
  @ViewChild('theTextarea') theTextarea: ElementRef<HTMLDivElement>;
  @Input() section: Section;
  current: Section;
  public isOpen = false;
  public minHeight = '0px';
  public modified = false;
  @Output() saveModification: EventEmitter<ViewEditSectionComponent> = new EventEmitter();
  @Output() saveDeletion: EventEmitter<ViewEditSectionComponent> = new EventEmitter();

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.section) {
      this.current = Object.assign({}, this.section);
    }
  }

  changeDrawer(newOpen: boolean) {
    this.isOpen = newOpen;
    this.updateHeight();
  }

  cancel() {
    this.current = Object.assign({}, this.section);
    this.changeDrawer(false);
  }

  save() {
    this.saveModification.emit(this);
  }

  delete() {
    this.saveDeletion.emit(this);
  }

  finishSave() {
    this.section = this.current;
    this.current = Object.assign({}, this.section);
    this.changeDrawer(false);
  }

  contentChanged() {
    this.modified = !(this.current.title === this.section.title && this.current.content === this.section.content);
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
