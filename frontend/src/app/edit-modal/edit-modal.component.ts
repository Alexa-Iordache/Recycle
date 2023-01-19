import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  lastName: string;
  firstName: string;
  cnp: string;
  birthDate: string;
  sex: string;
  phoneNumber: string;
  email: string;
  membership: string;
  medicalHistory: string;
}

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {

  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    console.log('Pacientul nu a fost editat cu succes');
    this.dialogRef.close();
  }

}
