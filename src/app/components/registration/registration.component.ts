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
  RegForm!: FormGroup;
  disabled: Boolean = true;
  userType:any=[{name:"",value:"Selet userType"},{name:"Admin",value:"Admin"},{name:"",value:"Agent"},];
constructor(private fb: FormBuilder, private vss: VssService, router: Router) { }

  ngOnInit(): void {
    this.RegForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(1)]],
      lname: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phno: ['', [Validators.required, Validators.pattern("^[1-9]{10}$"), Validators.minLength(10)]],
      address: ['', [Validators.required, Validators.minLength(20)]],
      userName: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      userType: ['',[Validators.required]],
    })
  }
  getRegFormControl(key: string): any {
    return this.RegForm.get(key);
  }
  save() {
    console.log(this.RegForm.value);
    this.disabled = false;
    const { pswd, ...data } = this.RegForm.value;
    this.vss.saveUser(data).subscribe((res) => {
      if (res) {
        return this.RegForm.reset();
      }
      else {
        return false;
      }
    });
  }

}
