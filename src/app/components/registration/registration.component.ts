import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
   RegForm!:FormGroup;
   naga:Boolean= true;
  constructor(private fb:FormBuilder) { }
   
  ngOnInit(): void {
    this.RegForm = this.fb.group({
      fname:['',[Validators.required,Validators.minLength(8)]],
      lname:['',[Validators.required,Validators.minLength(8)]],
      email:['',[Validators.required,Validators.email]],
      Pswd: ['',[Validators.required,Validators.minLength(8)]],
      CPswd: ['',[Validators.required,Validators.minLength(8)]],
      phno:['',[Validators.required,Validators.pattern("^[1-9]{10}$"),Validators.maxLength(10)]],
      address:['',[Validators.required,Validators.minLength(20)]],
      uname:['',[Validators.required,Validators.minLength(8)]],
      UPswd:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  getRegFormControl(key: string):any{
    return this.RegForm.get(key);
  }
   save(){
      console.log(this.RegForm.value);
      this.naga= false;
     }

  }     
 
