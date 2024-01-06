import { Component, OnInit } from '@angular/core';
import { DoctorModalComponent } from '../doctor-modal/doctor-modal.component';
import { RpcService } from '../services/rpc.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clientInfo: any;
  // specialitiesInfo: any;
  editMode = false;
  idToEdit: any;
  // specialityID: any;
  // idConvert = 0;
  displayedColumns = [
    'id',
    'name',
    'phoneNumber',
    'address',
    'subscription',
    'button',
  ];

  // medicalSpeciality: any;
  // lastName = '';
  // firstName = '';
  // cnp = '';
  // birthDate = '';
  // sex = '';
  // phoneNumber = '';
  // email = '';
  // county = '';
  // city = '';
  // street = '';
  // streetNumber = '';
  // doctorType = '';
  // hiringDate = '';
  // startSchedule = '';
  // endSchedule = '';

  constructor(private rpcService: RpcService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    let params = {
      username: 'admin',
    };

    this.rpcService.callRPC(
      'clients.createClientsTable',
      params,
      (err: any, res: any) => {
        if (err || res.error) {
          console.log('nu s-au putut afisa clientii');
          return;
        }
        this.clientInfo = res.result;
        console.log(this.clientInfo);
      }
    );
  }

  deleteClient(id: any): void {
    console.log(id);
    if (!id) {
      console.log('id was not introduced');
      return;
    }

    let paramsDelete = {
      id: id,
    };

    this.rpcService.callRPC(
      'clients.deleteClient',
      paramsDelete,
      (error: any, res: any) => {
        if (error) {
          console.log(error);
          return;
        }
        this.getClients();
      }
    );
  }

  // addDoctor(): void {
  //   const dialogRef = this.dialog.open(DoctorModalComponent, {
  //     data: {
  //       medicalSpeciality: this.medicalSpeciality,
  //       lastName: this.lastName,
  //       firstName: this.firstName,
  //       cnp: this.cnp,
  //       birthDate: this.birthDate,
  //       sex: this.sex,
  //       phoneNumber: this.phoneNumber,
  //       email: this.email,
  //       county: this.county,
  //       city: this.city,
  //       street: this.street,
  //       streetNumber: this.streetNumber,
  //       DoctorType: this.doctorType,
  //       hiringDate: this.hiringDate,
  //       startSchedule: this.startSchedule,
  //       endSchedule: this.endSchedule,
  //     },
  //   });

  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     if (!result) {
  //       console.log('doctor was not introduced');
  //       return;
  //     }

  //     let paramsAddDoctor = {
  //       medicalSpeciality: result.medicalSpeciality,
  //       lastName: result.lastName,
  //       firstName: result.firstName,
  //       cnp: result.cnp,
  //       birthDate: result.birthDate,
  //       sex: result.sex,
  //       phoneNumber: result.phoneNumber,
  //       email: result.email,
  //       county: result.county,
  //       city: result.city,
  //       street: result.street,
  //       streetNumber: result.streetNumber,
  //       DoctorType: result.doctorType,
  //       hiringDate: result.hiringDate,
  //       startSchedule: result.startSchedule,
  //       endSchedule: result.endSchedule,
  //     };

  //     console.log(paramsAddDoctor);

  //     this.rpcService.callRPC(
  //       'doctors.addDoctor',
  //       paramsAddDoctor,
  //       (error: any, res: any) => {
  //         console.log('intra aici');
  //         if (error) {
  //           console.log(error);
  //           return;
  //         }
  //         this.getDoctors();
  //       }
  //     );
  //   });
  // }

  editClient(id: any): void {
    this.editMode = true;
    this.idToEdit = id;
  }

  saveNewClient(element: any): void {
    console.log('s a apasat butonul de save');
    console.log(element);

    let paramsEditClient = {
      id: element.ClientID,
      name: element.Nume,
      phone: element.Telefon,
      address: element.Adresa,
      subscription: element.Tip_abonament,
    };

    this.rpcService.callRPC(
      'clients.editClient',
      paramsEditClient,
      (error: any, res: any) => {
        console.log('intra in edit');
        if (error) {
          console.log(error);
          return;
        }

        this.getClients();
      }
    );

    this.editMode = false;
  }

  // saveNewClient(element: any): void {
  //   console.log('s-a apasat butonul de save');

  //   let paramsGetClientName= {
  //     name: element.Nume,
  //   };

  //   this.rpcService.callRPC(
  //     'clients.getSpecialityName',
  //     paramsGetSpeciatilyName,
  //     (error: any, res: any) => {
  //       console.log('intra in getSpecialityName');
  //       if (error) {
  //         console.log(error);
  //         return;
  //       }
  //       this.specialityID = res.result;
  //       console.log(this.specialityID[0].MedicalSpecialityID);
  //       this.idConvert = this.specialityID[0].MedicalSpecialityID;
  //     }
  //   );

  //   let paramsEditDoctor = {
  //     id: element.DoctorID,
  //     medicalSpecialityID: this.idConvert,
  //     lastName: element.LastName,
  //     firstName: element.FirstName,
  //     phoneNumber: element.PhoneNumber,
  //     email: element.Email,
  //     doctorType: element.DoctorType,
  //   };

  //   this.rpcService.callRPC(
  //     'doctors.editDoctor',
  //     paramsEditDoctor,
  //     (error: any, res: any) => {
  //       console.log('intra in edit');
  //       console.log(paramsEditDoctor.medicalSpecialityID);
  //       if (error) {
  //         console.log(error);
  //         return;
  //       }
  //       this.getDoctors();
  //     }
  //   );
  //   this.editMode = false;
  // }
}
