import { Component, OnInit, Input, ViewChild, ElementRef, NgZone, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Section, Image } from 'src/app/models/ud-pages';
import { take } from 'rxjs/operators';
import { MatInput, MatDialog } from '@angular/material';
import { ChooseImageDialog } from '../choose-image-dialog/choose-image.dialog';

@Component({
  selector: 'app-view-edit-section',
  templateUrl: './view-edit-section.component.html',
  styleUrls: ['./view-edit-section.component.css']
})
export class ViewEditSectionComponent implements OnInit, OnChanges {
  @ViewChild('theDrawer') theDrawer: ElementRef<HTMLDivElement>;
  @ViewChild('theTextarea', {read: ElementRef}) theTextarea: ElementRef<HTMLTextAreaElement>;
  @Input() section: Section;
  current: Section;
  public isOpen = false;
  public minHeight = '0px';
  public saveable = false;
  @Output() saveModification: EventEmitter<ViewEditSectionComponent> = new EventEmitter();
  @Output() saveDeletion: EventEmitter<ViewEditSectionComponent> = new EventEmitter();

  constructor(
    private ngZone: NgZone,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.section) {
      this.current = Object.assign({}, this.section);
      if (this.current.title === '' && this.current.content === '') {
        this.changeDrawer(true);
      }
    }
  }

  changeDrawer(newOpen: boolean) {
    this.isOpen = newOpen;
    this.updateHeight();
  }

  cancel() {
    if (this.section.title === '' || this.section.content === '') {
      this.delete();
    } else {
      this.current = Object.assign({}, this.section);
      this.changeDrawer(false);
    }
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
    this.saveable = (
      (
        this.current.title !== this.section.title ||
        this.current.content !== this.section.content
      ) &&
      this.current.title !== '' &&
      this.current.content !== '');
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

  insertImage(image: Image) {
    this.insertText(`![Type your description here!](${image})`);
  }

  insertText(text: string) {
    this.current.content += '\n' + text;
  }

  openImageDialog() {
    this.dialog.open(ChooseImageDialog,
      {
        width: '75vw',
        height: '75vh'
      })
      .afterClosed().subscribe(x => {
        if (x) {
          this.insertImage(x);
          this.contentChanged();
        }
      });
  }

}
