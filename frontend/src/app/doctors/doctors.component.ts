import { Component, OnInit } from '@angular/core';
import { RpcService } from '../services/rpc.service';
// import { MatDialog } from '@angular/material/dialog';
// import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  dataSource: any;
  doctorInfo: any;
  modalOpen = false;
  // animal: string;
  // name: string;

  displayedColumns: string[] =
  [
    'lastName',
    'specialization',
    'doctorType',
    'ssn',
    'birthDate',
    'sex',
    'phoneNumber',
    'email',
    'adress',
    'hiringDate',
    'schedule'
  ];
  constructor(
    private rpcService: RpcService
    // public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log('s a initializat componenta');
    let query = `SELECT * FROM Doctors;`;

    let copyInstance = this;

    this.rpcService.callRPC('doctors.getDoctor', query, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa doctorii');
        return;
      }
      copyInstance.doctorInfo = res.result;
      this.doctorInfo = copyInstance.doctorInfo;
      console.log(this.doctorInfo);
      this.dataSource = this.doctorInfo;
    });
  }

  // modalAppears():  void {
  //   const dialogRef = this.dialog.open(ModalComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  // modalAppears(): void {
  //   const dialogRef = this.dialog.open(ModalComponent, {
  //     data: {name: this.name, animal: this.animal},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
}
