import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VssService {

  constructor() { }
  regDetails:any=[
    {username:"Pavan",password:"Pavan@123",usertype:"Agent"},
    {username:"Nagaraju",password:"Nagaraju@123",usertype:"Admin"},
    {username:"Singam",password:"Singam@123",usertype:"Agent"},
  ]
}
