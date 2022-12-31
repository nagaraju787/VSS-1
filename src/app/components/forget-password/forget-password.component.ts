import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  resetPassword(){
    this.router.navigate(["/login"])
  }
}
