import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-choose-image-dialog',
  templateUrl: './choose-image.dialog.html',
  styleUrls: ['./choose-image.dialog.css']
})
// tslint:disable-next-line
export class ChooseImageDialog {

  constructor(
    public dialogRef: MatDialogRef<ChooseImageDialog>
  ) { }

  onNoClick() {
    this.dialogRef.close();
  }

  done(out: string) {
    this.dialogRef.close(out);
  }

}
