import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  editMode = false;
  idToEdit: any;

  constructor(private rpcService: RpcService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getPatients();
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

  getPatients(): void {
    let params = {
      username: 'admin',
    };

    console.log('merge getPatients');

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
        this.getPatients();
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
          this.getPatients();
        }
      );
    });
  }

  editPatient(id: any): void {
    //console.log('s a apasat butonul de edit');
    this.editMode = true;
    //console.log(this.editMode);
    this.idToEdit = id;
    //console.log(this.idToEdit);
  }

  saveNewPatient(element: any): void {
    console.log('s a apasat butonul de save');
    console.log(element);

    let paramsEditPacient = {
      id: element.PatientID,
      lastName: element.LastName,
      firstName: element.FirstName,
      cnp: element.SSN,
      phoneNumber: element.PhoneNumber,
      email: element.Email,
      membership: element.Membership,
      medicalHistory: element.MedicalHistory,
    };

    this.rpcService.callRPC(
      'patients.editPatient',
      paramsEditPacient,
      (error: any, res: any) => {
        console.log('intra in edit');
        if (error) {
          console.log(error);
          return;
        }

        this.getPatients();
      }
    );

    this.editMode = false;
  }
}
