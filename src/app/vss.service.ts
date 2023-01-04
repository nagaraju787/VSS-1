import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class VssService {
  passingback= new BehaviorSubject<any>(true)
  constructor(private http:HttpClient) { }
  regDetails:any=[
    {username:"Pavan",password:"Pavan@123",usertype:"Agent"},
    {username:"Nagaraju",password:"Nagaraju@123",usertype:"Admin"},
    {username:"Singam",password:"Singam@123",usertype:"Agent"},
  ];
  //for getting invoices
  getInvoices(){
    // return this.http.get("https://jsonplaceholder.typicode.com/users");
    return this.http.get(environment.apiBaseUrl + "invoices")
  }
  saveUser(userData: any) {
    return this.http.post(environment.apiBaseUrl + 'users', userData);
  }
  //for deleting invoices
  deleteInvoice(id:any){
    return this.http.delete(environment.apiBaseUrl + "invoices/"+id)
  }
  //for adding invoices
  addInvoice(invoice:any){
    return this.http.post(environment.apiBaseUrl + 'invoices', invoice);
  }

}
