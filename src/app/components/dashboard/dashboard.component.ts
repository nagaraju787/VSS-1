import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
dashBoardMenu:any=[
  {name:"Home",route:"/dashBoard/home"},
  {name:"UserList",route:"/dashBoard/userList"},
  {name:"Invoice",route:"/dashBoard/invoice"},
  {name:"ContactUs",route:"/dashBoard/ContactUs"}
];
  ngOnInit(): void {
  }

}
