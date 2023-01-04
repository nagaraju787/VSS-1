import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, } from '@angular/material/table';
import { VssService } from '../vss.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

//import { DataSource } from '@angular/material';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit, AfterViewInit {
  invoicesList: any;
  list: any;
  displayedColumns: string[] = ["id", "name", "email", "phone", "actions"];
  datasource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  spinner: any = true;
  showForm: Boolean = false;
  newInvoice:any={};


  constructor(private vssService: VssService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.getInvoices();
    //this.dataSource = new MatTableDataSource(this.invoicesList);
  }
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
  getInvoices() {
    this.vssService.getInvoices().subscribe((data: any) => {
      this.invoicesList = data;
      this.datasource.data = data;
      console.log(this.datasource.data);
      this.spinner = false;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }
  //for sorting table
  announceSortChange(sortState: any) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  //delete Invoice
  deleteInv(id: any) {
    this.vssService.deleteInvoice(id).subscribe((res) => {
      console.log(res)
      console.log(this.datasource.data.splice(1, id))
      this.getInvoices()
    })

  }
  addNewInvo(){
    this.showForm = true;
  }
  cancel(){
    this.showForm = false;
  }
  addChanges(ev:any){
    this.showForm = false;
    console.log(this.newInvoice);
    this.vssService.addInvoice(this.newInvoice).subscribe()
  }
}
