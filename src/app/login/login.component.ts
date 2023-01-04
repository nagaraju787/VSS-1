import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { VssService } from '../vss.service';

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
  
  constructor(private router:Router,private service:VssService) { }
  RegDetails:any=[];
  ngOnInit(): void {
    this.RegDetails=this.service.regDetails;
    console.log(this.RegDetails)
  }
  login(){
    // if(this.userName === "Pavan" && this.password === "Pavan@123" && this.user ==="Agent"){
    //          this.router.navigate(["/#"])
    // }
    this.RegDetails.forEach((detail:any)=> {
      if(detail.username === this.userName && detail.password === this.password){
        this.router.navigate(["/dashBoard/home"])
      }
    });


  }
}
