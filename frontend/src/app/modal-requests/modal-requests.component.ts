import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  startDate: string;
  collectDate: string;
  phase: string;
}

@Component({
  selector: 'app-modal-requests',
  templateUrl: './modal-requests.component.html',
  styleUrls: ['./modal-requests.component.scss']
})
export class ModalRequestsComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalRequestsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    console.log('Cererea nu a fost adaugata');
    this.dialogRef.close();
  }
}
