import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VssService } from 'src/app/vss.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private actr:ActivatedRoute,private vss:VssService) { }

deta!:any;
dd!:number;
user:any;
arry:any[]=[
 {name:"Nagaraju", id:1, phonenumber:8778031994 , photo:"./../../../assets/logo.jpg"},
 {name:"PavanKumar Reddy",id:2, phonenumber:555788855 , photo:"./../../../assets/logo.jpg"},
 {name:"Madhu", id:3 , phonenumber:999999999 , photo:"./../../../assets/logo.jpg"},
 {name:"Singaraiah", id:4 , phonenumber:222222222 , photo:"./../../../assets/logo.jpg"},
 {name:"Prasanna", id:5, phonenumber:125525525 , photo:"./../../../assets/logo.jpg"},
 {name:"Sunitha", id:6, phonenumber:125525525 , photo:"./../../../assets/logo.jpg"},
 {name:"Hymavathi", id:7, phonenumber:125525525 , photo:"./../../../assets/logo.jpg"},
 {name:"Aswani", id:8, phonenumber:125525525 , photo:"./../../../assets/logo.jpg"},
 {name:"Srilakshmi", id:9, phonenumber:125525525 , photo:"./../../../assets/logo.jpg"},
 {name:"Moulika", id:10, phonenumber:125525525 , photo:"./../../../assets/logo.jpg"},

]

  ngOnInit(): void {
   this.actr.params.subscribe(
      x=>{this.deta=x});
      console.log(this.deta);
   this.dd=parseInt(this.deta.id);
   console.log(this.dd);
   this.user=this.arry.find(u=>u.id==this.dd);
   console.log(this.user);
  }
  back(){
   this.vss.passingback.next("true")
  }

}
