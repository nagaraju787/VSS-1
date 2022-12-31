import { Component, OnInit } from '@angular/core';
import { VssService } from '../vss.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(private vss:VssService) { }
  booleanvalue:boolean=true;
  ngOnInit(): void {
    this.vss.passingback.subscribe((value)=>{this.booleanvalue=value})
  }
  users:any=[
    {name:"Nagaraju", id:1},
    {name:"PavanKumar Reddy",id:2},
    {name:"Madhu", id:3},
    {name:"Singaraiah", id:4},
    {name:"Prasanna", id:5},
    {name:"Sunitha", id:6},
    {name:"Hymavathi", id:7},
    {name:"Aswani", id:8},
    {name:"Srilakshmi", id:9},
    {name:"Moulika", id:10},
  ];
    details(){
      this.booleanvalue=false;
    }
}

