import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { VssService } from '../vss.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // userName:any;
  // password:any;
  LoginForm!:FormGroup;
  user:any;
  userType:any=["Agent","Admin"];
  
  constructor(private router:Router,private service:VssService,private fb:FormBuilder) { }
  // RegDetails:any=[];
  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      userName:['',[Validators.required,Validators.minLength(8)]],
      password:['',[Validators.required,Validators.minLength(8)]],
      //usertype:['',[Validators.required]],
    })
    // this.RegDetails=this.service.regDetails;
    // console.log(this.RegDetails)
  }
  getLoginFormControl(key: string):any{
    return this.LoginForm.get(key);
  }
  login(){
    // if(this.userName === "Pavan" && this.password === "Pavan@123" && this.user ==="Agent"){
    //          this.router.navigate(["/#"])
    // }
   // this.RegDetails.forEach((detail:any)=> {
     // if(detail.username === this.userName && detail.password === this.password){
        this.router.navigate(["/dashBoard/home"])
      //}
    };


  }

