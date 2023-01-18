import { Component, OnInit } from '@angular/core';
import { RpcService } from '../services/rpc.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})

export class AppointmentsComponent implements OnInit {

  appointmentsInfo: any;

  constructor(
    private rpcService: RpcService
  ) { }

  ngOnInit(): void {
    let params = {
      "username": 'admin'
    }

    let copyInstance = this;

    this.rpcService.callRPC('appointments.createAppoinmentsTable', params, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa programarile');
        return;
      }
      this.appointmentsInfo = res.result;
      console.log(this.appointmentsInfo);
    });
  }
  displayedColumns = ['position', 'patient', 'doctor', 'location', 'date', 'hour'];
}
