import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetpasswordlink',
  templateUrl: './forgetpasswordlink.component.html',
  styleUrls: ['./forgetpasswordlink.component.scss']
})
export class ForgetpasswordlinkComponent implements OnInit {
getRegFormControl(arg0: string) {
throw new Error('Method not implemented.');
}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
send(){
  this.router.navigate(["/forgetpassword"])
}
}
