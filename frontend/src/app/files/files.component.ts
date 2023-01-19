import { Component, OnInit } from '@angular/core';
import { RpcService } from '../services/rpc.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  filesInfo: any;

  constructor(
    private rpcService: RpcService
  ) { }

  ngOnInit(): void {
    let params = {
      "username": 'admin'
    }

    this.rpcService.callRPC('files.createFilesTable', params, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa fisele medicale');
        return;
      }
      this.filesInfo = res.result;
      console.log(this.filesInfo);
    });
  }
  displayedColumns = ['fileCode', 'patient', 'results', 'treatment'];
}
