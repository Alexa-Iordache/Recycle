import { Component, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  name: string,
  phone: string,
  address: string,
  email: string,
  subscription_type: string,
  subscription_amount: number,
  subscription_time: string,
  subscription_startDate: string,
  subscription_endDate: string
}

@Component({
  selector: 'app-doctor-modal',
  templateUrl: './doctor-modal.component.html',
  styleUrls: ['./doctor-modal.component.scss']
})
export class DoctorModalComponent {

  constructor(
    public dialogRef: MatDialogRef<DoctorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    console.log('Doctorul nu a fost adaugat');
    this.dialogRef.close();
  }
}
