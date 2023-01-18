import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { RpcService } from '../services/rpc.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patientsInfo: any;
  // data = {
    lastName = '';
    firstName = '';
    cnp = '';
    birthDate = '';
    sex = '';
    phoneNumber = '';
    email = '';
    membership = '';
    medicalHistory = '';
  // }

  constructor(
    private rpcService: RpcService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    let params = {
      "username": 'admin'
    }

    this.rpcService.callRPC('patients.getPatients', params, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa pacientii');
        return;
      }
      this.patientsInfo = res.result;
      console.log(this.patientsInfo);
    });
  }
  displayedColumns = ['position', 'lastName', 'firstName', 'cnp',
    'phoneNumber', 'email', 'membership', 'medicalHistory', 'button'];

  deleteButton(id: any): void {
    console.log(id);

    // this.rpcService.callRPC('patients.deletePatient', id, (err: any, res: any) => {

    //   if (err || res.error) {
    //     console.log('nu s au putut sterge pacientul');
    //     return;
    //   }
    //   this.patientsInfo = res.result;
    //   console.log(this.patientsInfo);
    // });
  }

  openDialog(): void {
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
        medicalHistory: 'NU'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result.lastName);
      //this.lastName = result;
      let paramsAdd = result;
      console.log('Pacientul a fost adaugat cu succes');
      // console.log(result.firstName);

      // this.rpcService.callRPC('patients.addPatient', paramsAdd, (err: any, res: any) => {

      //   if (err || res.error) {
      //     console.log('nu s a putut adauga pacientul');
      //     return;
      //   }
      //   this.patientsInfo = res.result;
      //   console.log(this.patientsInfo);
      // });
    });
  }
}
