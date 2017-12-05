import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {data} from './app.data'
@Injectable()
export class DataService {

  constructor(private http :HttpClient) { }

// getData(){
//   return this.http.get("https://jsonplaceholder.typicode.com/users");
// }

getData(){

  const body = {name: 'Brad'};  
   return this.http.post("table/tabledata",body);
  }
// getData(){
//   return this.http.get("app.data");
// }
}


