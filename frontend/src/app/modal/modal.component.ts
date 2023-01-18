import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  // data = {
  //   lastName: '',
  //   firstName: '',
  //   cnp: '',
  //   birthDate: '',
  //   sex: '',
  //   phoneNumber: '',
  //   email: '',
  //   membership: '',
  //   medicalHistory: ''
  // }

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    console.log('Pacientul nu a fost adaugat');
    this.dialogRef.close();
  }

  // onClick(): void {
  //   console.log('Pacientul a fost adaugat');
  //   // console.log(data);
  //   this.dialogRef.close();
  // }
}
