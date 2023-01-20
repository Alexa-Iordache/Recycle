import { Component, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  medicalSpeciality: any,
  lastName: string,
  firstName: string,
  cnp: string,
  birthDate: string,
  sex: string,
  phoneNumber: string,
  email: string,
  county: string,
  city: string,
  street: string,
  streetNumber: any,
  DoctorType: string,
  hiringDate: string,
  startSchedule: string,
  endSchedule: string
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
