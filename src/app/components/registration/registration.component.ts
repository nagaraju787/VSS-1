import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
   RegForm!:FormGroup;
   naga:Boolean=true
  constructor(private fb:FormBuilder) { }
   
  ngOnInit(): void {
    this.RegForm = this.fb.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      email:['',[Validators.required]],
      Pswd: ['',[Validators.required,Validators.minLength(8)]],
      CPswd: ['',[Validators.required,Validators.minLength(8)]],
      phno:['',[Validators.required]],
      address:['',[Validators.required]]
    })
  }
  getRegFormControl(key: string):any{
    return this.RegForm.get(key);
  }
  save(){
      console.log(this.RegForm.value);
      this.naga=false;
     }
  }
 
