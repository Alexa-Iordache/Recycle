import { Component, OnInit } from '@angular/core';
import { ClientModalComponent } from '../client-modal/client-modal.component';
import { RpcService } from '../services/rpc.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clientInfo: any;
  editMode = false;
  idToEdit: any;
  displayedColumns = [
    'id',
    'name',
    'phoneNumber',
    'address',
    'subscription',
    'button',
  ];

  name = '';
  phone = '';
  address = '';
  email = '';
  subscription_type = '';
  subscription_amount = 0;
  subscription_time = '';
  subscription_startDate = '';
  subscription_endDate = '';

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

  addClient(): void {
    const dialogRef = this.dialog.open(ClientModalComponent, {
      data: {
        name: this.name,
        phone: this.phone,
        address: this.address,
        email: this.email,
        subscription_type: this.subscription_type,
        subscription_amount: this.subscription_amount,
        subscription_time: this.subscription_time,
        subscription_startDate: this.subscription_startDate,
        subscription_endDate: this.subscription_endDate,
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (!result) {
        console.log('client was not introduced');
        return;
      }
      console.log('intra aici');

      let paramsAddClient = {
        name: result.name,
        phone: result.phone,
        address: result.address,
        email: result.email,
        subscription_type: result.subscription_type,
        subscription_amount: result.subscription_amount,
        subscription_time: result.subscription_time,
        subscription_startDate: result.subscription_startDate,
        subscription_endDate: result.subscription_endDate,
      };

      let inputDateString = paramsAddClient.subscription_startDate;
      let inputDate = new Date(inputDateString);
      let year = inputDate.getUTCFullYear();
      let month = ('0' + (inputDate.getUTCMonth() + 1)).slice(-2);
      let day = ('0' + inputDate.getUTCDate()).slice(-2);
      let formattedDate = `${year}-${month}-${day}`;
      paramsAddClient.subscription_startDate = formattedDate;

      let inputDateString2 = paramsAddClient.subscription_endDate;
      let inputDate2 = new Date(inputDateString2);
      let year2 = inputDate2.getUTCFullYear();
      let month2 = ('0' + (inputDate.getUTCMonth() + 1)).slice(-2);
      let day2 = ('0' + inputDate.getUTCDate()).slice(-2);
      let formattedDate2 = `${year2}-${month2}-${day2}`;
      paramsAddClient.subscription_endDate = formattedDate2;

      console.log(paramsAddClient);

      this.rpcService.callRPC(
        'clients.addClient1',
        paramsAddClient,
        (error: any, res: any) => {
          if (error) {
            console.log(error);
            return;
          }
        }
      );

      this.rpcService.callRPC(
        'clients.addClient2',
        paramsAddClient,
        (error: any, res: any) => {
          if (error) {
            console.log(error);
            return;
          }
        }
      );

      this.rpcService.callRPC(
        'clients.addClient3',
        paramsAddClient,
        (error: any, res: any) => {
          if (error) {
            console.log(error);
            return;
          }
        }
      );
    });
    this.getClients();
  }

  editClient(id: any): void {
    this.editMode = true;
    this.idToEdit = id;
  }

  saveNewClient(element: any): void {
    console.log('s a apasat butonul de save');

    let paramsEditClient = {
      id: element.ClientID,
      name: element.Nume,
      phone: element.Telefon,
      address: element.Adresa,
      subscription: element.Tip_abonament,
    };

    console.log(paramsEditClient);

    // salveaza clientului dupa editare se face in 3 pasi,
    // intrucat aveam nevoie de 3 query-uri diferite pentru
    // a actualiza atat tblClienti, cat si tblAbonament
    this.rpcService.callRPC(
      'clients.editClient',
      paramsEditClient,
      (error: any, res: any) => {
        console.log('intra in edit');
        if (error) {
          console.log(error);
          return;
        }
      }
    );

    this.rpcService.callRPC(
      'clients.editClient2',
      paramsEditClient,
      (error: any, res: any) => {
        console.log('intra in edit');
        if (error) {
          console.log(error);
          return;
        }
      }
    );

    this.rpcService.callRPC(
      'clients.editClient3',
      paramsEditClient,
      (error: any, res: any) => {
        console.log('intra in edit');
        if (error) {
          console.log(error);
          return;
        }
      }
    );

    this.getClients();

    this.editMode = false;
  }
}
