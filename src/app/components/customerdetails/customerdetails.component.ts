import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VssService } from 'src/app/vss.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.scss']
})
export class CustomerdetailsComponent implements OnInit {
  
  constructor(private service:VssService) { }
  displayedColumns: string[] = ['id', 'Totalamount', 'Payedamount', 'Dueamount',"date","name"];
  dataSource = new MatTableDataSource<any>([]);
  
  ngOnInit(): void {
   this.getCustomers();
  }
  getCustomers(){
    this.service.getCustomerdetails().subscribe((customerdetails:any)=>{
      this.dataSource.data = customerdetails;
      console.log(this.dataSource.data )
    })
  }

}