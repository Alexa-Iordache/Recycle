import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { RpcService } from '../services/rpc.service';

@Component({
  selector: 'app-wastebin',
  templateUrl: './wastebin.component.html',
  styleUrls: ['./wastebin.component.scss'],
})
export class PatientsComponent implements OnInit {
  wasteBinInfo: any;
  location = '';
  capacity = '';
  frequency = '';
  type = '';

  editMode = false;
  idToEdit: any;

  constructor(private rpcService: RpcService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getWasteBin();
  }

  displayedColumns = [
    'location',
    'capacity',
    'frequency',
    'type',
    'button'
  ];

  getWasteBin(): void {
    let params = {
      "username": 'admin'
    };

    console.log('merge getWasteBin');

    this.rpcService.callRPC(
      'wasteBin.getWasteBin',
      params,
      (err: any, res: any) => {
        if (err || res.error) {
          console.log('nu s au putut afisa tomberoanele');
          return;
        }
        this.wasteBinInfo = res.result;
        console.log(this.wasteBinInfo);
      }
    );
  }

  deleteWasteBin(id: any): void {
    if (!id) {
      console.log('id was not introduced');
      return;
    }

    let paramsDelete = {
      id: id,
    };

    console.log(paramsDelete);

    this.rpcService.callRPC(
      'wasteBin.deleteWasteBin',
      paramsDelete,
      (error: any, res: any) => {
        console.log('intra aici');
        if (error) {
          console.log(error);
          return;
        }
        this.getWasteBin();
      }
    );
  }

  addWasteBin(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        location: this.location,
        capacity: this.capacity,
        frequency: this.frequency,
        type: this.type
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        console.log('waste bin was not introduced');
        return;
      }

      let paramsAddWasteBin = {
        location: result.location,
        capacity: result.capacity,
        frequency: result.frequency,
        type: result.type
      };

      this.rpcService.callRPC(
        'wasteBin.addWasteBin',
        paramsAddWasteBin,
        (error: any, res: any) => {
          if (error) {
            console.log(error);
            return;
          }
          this.getWasteBin();
        }
      );
    });
  }

  // editPatient(id: any): void {
  //   //console.log('s a apasat butonul de edit');
  //   this.editMode = true;
  //   //console.log(this.editMode);
  //   this.idToEdit = id;
  //   //console.log(this.idToEdit);
  // }

  // saveNewPatient(element: any): void {
  //   console.log('s a apasat butonul de save');
  //   console.log(element);

  //   let paramsEditPacient = {
  //     id: element.PatientID,
  //     lastName: element.LastName,
  //     firstName: element.FirstName,
  //     cnp: element.SSN,
  //     phoneNumber: element.PhoneNumber,
  //     email: element.Email,
  //     membership: element.Membership,
  //     medicalHistory: element.MedicalHistory,
  //   };

  //   this.rpcService.callRPC(
  //     'patients.editPatient',
  //     paramsEditPacient,
  //     (error: any, res: any) => {
  //       console.log('intra in edit');
  //       if (error) {
  //         console.log(error);
  //         return;
  //       }

  //       this.getPatients();
  //     }
  //   );

  //   this.editMode = false;
  // }
}
