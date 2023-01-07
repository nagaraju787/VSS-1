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
  LoginForm!:FormGroup;
  user:any;
  userType:any=["Agent","Admin"];
  error:any;
  constructor(private router:Router,private service:VssService,private fb:FormBuilder) { }
  // RegDetails:any=[];
  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      userName:['',[Validators.required,Validators.minLength(15)]],
      password:['',[Validators.required,Validators.minLength(15)]],
      userType:[''],
    })
 }
  getLoginFormControl(key: string):any{
    return this.LoginForm.get(key);
  }
  login(){
   console.log(this.LoginForm.value) 
    this.service.login(this.LoginForm.value).subscribe((res:any)=>{
      if(res.error){
        this.error=res.error
      }else{
        this.router.navigate(["/dashBoard/home"])
      }})
    };


  }

