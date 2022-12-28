import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
dashBoardMenu:any=[
  {name:"Home",route:"/home"},
  {name:"UserList",route:"/userList"},
  {name:"Invoice",route:"/invoice"},
  {name:"ContactUs",route:"/ContactUs"}
];
  ngOnInit(): void {
  }

}
