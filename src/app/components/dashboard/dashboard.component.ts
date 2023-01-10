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
  {name:"ContactUs",route:"/dashBoard/contactus"}
];
  ngOnInit(): void {
    this.vss.Username.next(sessionStorage.getItem('userName'))
  }

}
