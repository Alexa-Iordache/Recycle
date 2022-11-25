import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

// RPC - calls other sprocesses on the remote system like a local system
export class RpcService {

  private url = 'http://localhost:4201/api';

  constructor() { }

  callRPC(endpoint: any, params: any, callback: any): void {
    // the response is expressed as a single json object
    // rpc call has fixed parameters: jsonrpc, method, params, id

    let body = {
      "jsonrpc": "2.0",
      "method": endpoint,
      "params": params,
      "id": "1"
    }

    // axios - used to make http requests
    axios.post(this.url, body)
    .then (response => {
      if(response)
        callback(null, response.data);
    })
    .catch(error => {
      if(error)
        callback(error, null);
    })
  }
}
