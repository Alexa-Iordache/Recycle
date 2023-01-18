import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { RpcService } from '../services/rpc.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  doctorInfo: any;

  constructor(
    private rpcService: RpcService
  ) { }

  ngOnInit(): void {
    let params = {
      "username": 'admin'
    }

    this.rpcService.callRPC('doctors.createDoctorsTable', params, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa doctorii');
        return;
      }
      this.doctorInfo = res.result;
      console.log(this.doctorInfo);
    });
  }
  displayedColumns = ['position', 'lastName', 'firstName', 'calification', 'specialization', 'phoneNumber', 'email'];
}
