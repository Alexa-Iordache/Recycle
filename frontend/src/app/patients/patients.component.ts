import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { ModalComponent } from '../modal/modal.component';
import { RpcService } from '../services/rpc.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  patientsInfo: any;
  lastName = '';
  firstName = '';
  cnp = '';
  birthDate = '';
  sex = '';
  phoneNumber = '';
  email = '';
  membership = '';
  medicalHistory = '';

  constructor(private rpcService: RpcService, public dialog: MatDialog) {}

  ngOnInit(): void {
    let params = {
      username: 'admin',
    };

    this.rpcService.callRPC(
      'patients.getPatients',
      params,
      (err: any, res: any) => {
        if (err || res.error) {
          console.log('nu s au putut afisa pacientii');
          return;
        }
        this.patientsInfo = res.result;
        console.log(this.patientsInfo);
      }
    );
  }
  displayedColumns = [
    'position',
    'lastName',
    'firstName',
    'cnp',
    'phoneNumber',
    'email',
    'membership',
    'medicalHistory',
    'button',
  ];

  deletePatient(id: any): void {
    if (!id) {
      console.log('id was not introduced');
      return;
    }

    let paramsDelete = {
      id: id,
    };

    console.log(paramsDelete);

    this.rpcService.callRPC(
      'patients.deletePatient',
      paramsDelete,
      (error: any, res: any) => {
        console.log('intra aici');
        if (error) {
          console.log(error);
          return;
        }
        this.ngOnInit();
      }
    );
  }

  addPatient(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        lastName: this.lastName,
        firstName: this.firstName,
        cnp: this.cnp,
        birthDate: this.birthDate,
        sex: this.sex,
        phoneNumber: this.phoneNumber,
        email: this.email,
        membership: this.membership,
        medicalHistory: 'NU',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        console.log('pacient was not introduced');
        return;
      }

      let paramsAddPacient = {
        lastName: result.lastName,
        firstName: result.firstName,
        cnp: result.cnp,
        birthDate: result.birthDate,
        sex: result.sex,
        phoneNumber: result.phoneNumber,
        email: result.email,
        membership: result.membership,
        medicalHistory: 'NU',
      };

      this.rpcService.callRPC(
        'patients.addPatient',
        paramsAddPacient,
        (error: any, res: any) => {
          console.log('intra aici');
          if (error) {
            console.log(error);
            return;
          }
          this.ngOnInit();
        }
      );
    });
  }

  editPatient(id: any): void {
    const dialogRef = this.dialog.open(EditModalComponent, {
      data: {
        lastName: this.lastName,
        firstName: this.firstName,
        cnp: this.cnp,
        birthDate: this.birthDate,
        sex: this.sex,
        phoneNumber: this.phoneNumber,
        email: this.email,
        membership: this.membership,
        medicalHistory: 'NU',
      },
    });

    console.log(id);

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        console.log('pacient was not introduced');
        return;
      }

      let paramsAddPacient = {
        lastName: result.lastName,
        firstName: result.firstName,
        cnp: result.cnp,
        birthDate: result.birthDate,
        sex: result.sex,
        phoneNumber: result.phoneNumber,
        email: result.email,
        membership: result.membership,
        medicalHistory: 'NU',
      };

      this.rpcService.callRPC(
        'patients.addPatient',
        paramsAddPacient,
        (error: any, res: any) => {
          console.log('intra aici');
          if (error) {
            console.log(error);
            return;
          }
          this.ngOnInit();
        }
      );
    });
  }
}
