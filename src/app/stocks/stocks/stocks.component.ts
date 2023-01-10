import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VssService } from 'src/app/vss.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ["id", "itemName", "discription", "batchName", "companyName","quanity"];
  constructor(private vssService:VssService) { }
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
     this.getStocks()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getStocks() {
    this.vssService.getStocks().subscribe((data: any) => {
      this.dataSource.data = data;
      console.log(data)
     })
  }
  filter(event:any){
this.dataSource.filter=event.target.value
  }
}
