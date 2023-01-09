import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';


import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class VssService {
  passingback = new BehaviorSubject<any>(true)
  userIcon = new BehaviorSubject<any>(false)
  Username = new BehaviorSubject<any>(null)
  constructor(private http: HttpClient) { }
  //for getting invoices
  getInvoices(): Observable<any> {
    // return this.http.get("https://jsonplaceholder.typicode.com/users");
    return this.http.get(environment.apiBaseUrl + "invoices")
  }
  saveUser(user: any) {
    console.log(user)
    return this.http.post(environment.apiBaseUrl + 'users', user);

  }
  //for deleting invoices
  deleteInvoice(id: any) {
    return this.http.delete(environment.apiBaseUrl + "invoices/" + id)
  }
  //for adding invoices
  addInvoice(invoice: any) {
    return this.http.post(environment.apiBaseUrl + 'invoices', invoice);
  }
  editInvoice(editedInv: any) {
    return this.http.put(environment.apiBaseUrl + "invoices/" + editedInv.id, editedInv)
  }

  //userDetails
  loginvalidation(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + "users")
  }
  login(deta: any): Observable<any> {
    return this.loginvalidation().pipe(
      map((users: any) => {
        const user = users.find((user: any) => deta.userName === user.userName && deta.password === user.password && deta.userType === user.userType)
        if (user) {
          this.Username.next(deta.userName);
          sessionStorage.setItem('userName', deta.userName);
          this.userIcon.next(true);
          return user
        } else {
          return { error: "invalid details" }
        }
      }))
  }


}
