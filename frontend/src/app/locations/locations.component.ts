import { Component, OnInit } from '@angular/core';
import { RpcService } from '../services/rpc.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locationsInfo: any;

  constructor(
    private rpcService: RpcService
  ) { }

  ngOnInit(): void {
    let params = {
      "username": 'admin'
    }

    this.rpcService.callRPC('locations.getLocation', params, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa locatii;e');
        return;
      }
      this.locationsInfo = res.result;
      console.log(this.locationsInfo);
    });
  }
  displayedColumns = ['county', 'street'];

}
