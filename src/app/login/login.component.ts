import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName:any;
  password:any;
  user:any;
  userType:any=["Agent","Admin"];
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.userName === "Pavan" && this.password === "Pavan@123" && this.user ==="Agent"){
             this.router.navigate(["/#"])
    }
  }
}
