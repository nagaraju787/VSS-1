import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VssService } from '../vss.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit,AfterViewInit {

  columns:any = ["CustomerId","FirstName","LastName","Email","Address","Phone","Actions"]
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:VssService) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getCustomers(){
    this.service.getCustomers().subscribe((customers:any)=>{
      this.dataSource.data = customers;
      console.log(this.dataSource.data )
    })
  }
  onDeleteClick(id:any){
console.log(id)
  }
  //filtering the table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}
