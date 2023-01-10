import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
   ForgotForm! : FormGroup;
   ForgotsForm! : FormGroup;
   disabled:boolean = true;
   isdisabled:boolean = true;
  constructor(private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.ForgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    })
    this.ForgotsForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
  getForgotFormControl(key: string): any {
    return this.ForgotForm.get(key);
  }
  getForgotsFormControl(key: string): any {
    return this.ForgotsForm.get(key);
  }
  reset(){
    console.log(this.ForgotForm.value);
    this.disabled = false;
  }
  Changereset(){
   this.isdisabled = false;
  }
}
