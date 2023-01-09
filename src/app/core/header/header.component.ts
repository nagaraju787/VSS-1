import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VssService } from 'src/app/vss.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
 userName:any=sessionStorage.getItem('userName');
  constructor(private vss:VssService , private router:Router) { }
 profilecondition:boolean=false;
  ngOnInit(): void {
    this.vss.Username.subscribe((user:any)=>{this.userName=user});
  }
  profile(){
    if(this.profilecondition){
    this.profilecondition=false;
    }else{
      this.profilecondition=true;
    }
}
LogOut(){
  console.log(sessionStorage.getItem('userName'))
  sessionStorage.removeItem('userName');
  this.router.navigate(['login']);
  }
  leave(event:any){
    setTimeout(() => {
    this.profilecondition=false;
     },1000);
  }
}
