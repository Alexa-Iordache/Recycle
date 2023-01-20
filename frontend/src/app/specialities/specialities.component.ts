import { Component, OnInit } from '@angular/core';
import { RpcService } from '../services/rpc.service';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.scss']
})
export class SpecialitiesComponent implements OnInit {

  specialitiesInfo: any;

  constructor(
    private rpcService: RpcService
  ) { }

  ngOnInit(): void {
    let params = {
      "username": 'admin'
    }

    this.rpcService.callRPC('specialities.createSpecialitiesTable', params, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa specializarile');
        return;
      }
      this.specialitiesInfo = res.result;
      console.log(this.specialitiesInfo);
    });
  }
  displayedColumns = ['name', 'description'];

}
