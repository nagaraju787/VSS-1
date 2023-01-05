import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VssService } from 'src/app/vss.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
   RegForm!:FormGroup;
   naga:Boolean= true;
  constructor(private fb:FormBuilder,private vss:VssService,router:Router) { }
   
  ngOnInit(): void {
    this.RegForm = this.fb.group({
      fname:['',[Validators.required,Validators.minLength(1)]],
      lname:['',[Validators.required,Validators.minLength(1)]],
      email:['',[Validators.required,Validators.email]],
      phno:['',[Validators.required,Validators.pattern("^[1-9]{10}$"),Validators.maxLength(10)]],
      address:['',[Validators.required,Validators.minLength(20)]],
      uname:['',[Validators.required,Validators.minLength(1)]],
      pswd: ['',[Validators.required,Validators.minLength(8)]],
      cpswd: ['',[Validators.required,Validators.minLength(8)]],
    })
  }
  getRegFormControl(key: string):any{
    return this.RegForm.get(key);
  }
   save(){
      console.log(this.RegForm.value);
      this.naga= false;
      const {cpswd, ...data} = this.RegForm.value;
       this.vss.saveUser(data).subscribe((res)=>{
         if(res) {
           return this.RegForm.reset();
         }
         else{
          return false;
         }

          })
     }

  }     
 
