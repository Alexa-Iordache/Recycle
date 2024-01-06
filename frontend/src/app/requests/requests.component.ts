import { Component, OnInit } from '@angular/core';
import { RpcService } from '../services/rpc.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalRequestsComponent } from '../modal-requests/modal-requests.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  requestInfo: any;
  startDate = '';
  collectDate = '';
  phase = '';
  editMode = false;
  idToEdit: any;

  displayedColumns = ['startDate', 'collectDate', 'phase', 'button'];

  constructor(
    private rpcService: RpcService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
   this.getRequest();
  }

  getRequest(): void {
    let params = {
      username: 'admin'
    }

    this.rpcService.callRPC('requests.getRequests', params, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa cererile');
        return;
      }
      this.requestInfo = res.result;
      console.log(this.requestInfo);
    });
  }

  deleteRequest(id: any): void {
    console.log(id);
    if (!id) {
      console.log('id was not introduced');
      return;
    }

    let paramsDelete = {
      id: id,
    };

    this.rpcService.callRPC(
      'requests.deleteRequest',
      paramsDelete,
      (error: any, res: any) => {
        if (error) {
          console.log(error);
          return;
        }
        this.getRequest();
      }
    );
  }

  addRequest(): void {
    const dialogRef = this.dialog.open(ModalRequestsComponent, {
      data: {
        startDate: this.startDate,
        collectDate: this.collectDate,
        phase: this.phase
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        console.log('waste bin was not introduced');
        return;
      }

      let paramsAddRequests = {
        startDate: result.startDate,
        collectDate: result.collectDate,
        phase: result.phase
      };

      //  algoritm pentru a transforma data intr-un format acceptat de MySQL
      let var1 = paramsAddRequests.startDate;
      const inputDate = new Date(var1);
      const year = inputDate.getFullYear();
      const month = ('0' + (inputDate.getMonth() + 1)).slice(-2);
      const day = ('0' + inputDate.getDate()).slice(-2);
      paramsAddRequests.startDate = `${year}-${month}-${day}`;

      let var2 = paramsAddRequests.collectDate;
      const inputDate2 = new Date(var1);
      const year2 = inputDate.getFullYear();
      const month2 = ('0' + (inputDate.getMonth() + 1)).slice(-2);
      const day2 = ('0' + inputDate.getDate()).slice(-2);
      paramsAddRequests.collectDate = `${year2}-${month2}-${day2}`;

      this.rpcService.callRPC(
        'requests.addRequest',
        paramsAddRequests,
        (error: any, res: any) => {
          if (error) {
            console.log(error);
            return;
          }
          this.getRequest();
        }
      );
    });
  }

  // editRequest(id: any): void {
  //   this.editMode = true;
  //   this.idToEdit = id;
  // }

  // saveNewRequest(element: any): void {
  //   console.log('s a apasat butonul de save');
  //   console.log(element);

  //   let paramsEditRequest = {
  //     startDate: element.Data_cerere,
  //     collectDate: element.Data_colectare,
  //     phase: element.Etapa,
  //   };

  //   this.rpcService.callRPC(
  //     'requests.editRequest',
  //     paramsEditRequest,
  //     (error: any, res: any) => {
  //       console.log('intra in edit');
  //       if (error) {
  //         console.log(error);
  //         return;
  //       }

  //       this.getRequest();
  //     }
  //   );

  //   this.editMode = false;
  // }
}
