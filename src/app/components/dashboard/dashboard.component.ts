import { Component, OnInit } from '@angular/core';
import { VssService } from 'src/app/vss.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private vss:VssService) { }
dashBoardMenu:any=[
  {name:"Home",route:"/dashBoard/home"},
  {name:"UserList",route:"/dashBoard/userList"},
  {name:"Invoice",route:"/dashBoard/invoices"},
  {name:"Stocks",route:"/dashBoard/stocks"},
  {name:"Customers",route:"/dashBoard/customers"},
  {name:"ContactUs",route:"/dashBoard/contactus"},
  {name:"payments",route:"/dashBoard/payments"},
  {name:"Customerdetails",route:"/dashBoard/customerdetails"},
  {name:"NgRx",route:"/dashBoard/counter"},
  {name:"NgRx-Posts",route:"/dashBoard/posts"},

];
  ngOnInit(): void {
    this.vss.userIcon.next(true);
    this.vss.Username.next(sessionStorage.getItem('userName'));
  }

}
