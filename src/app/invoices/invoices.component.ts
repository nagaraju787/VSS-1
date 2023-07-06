import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, } from '@angular/material/table';
import { VssService } from '../vss.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';


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
  newInvoice: any = {};
  isEdit: Boolean = false;
  title: any;
  btnText: any;
  invoiceId: any;
  filterValue:any;
  showDeleteform: any = false;
  searchBar:Boolean = false;
  paginatorShow:Boolean = true;
  clearIcon: any;

  constructor(private vssService: VssService, private router:Router) { }

  ngOnInit(): void {
    this.getInvoices();
    //this.dataSource = new MatTableDataSource(this.invoicesList);
  }
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
      console.log(this.paginator.hasNextPage)
    this.datasource.sort = this.sort;
  }
  getInvoices() {
    this.vssService.getInvoices().subscribe((data: any) => {
      this.invoicesList = data;
      this.datasource.data = data;
      console.log( this.datasource.data.length);
      this.spinner = false;
      if(data.length >= 1){
        this.searchBar = true
      };
     
    })
    if(this.datasource.data.length > 5){
      this.paginatorShow = false;
      //this.getInvoices();
   }
  }
  applyFilter(event: Event) {
    this. filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = this.filterValue.trim().toLowerCase();
   this. filterValue ? this.clearIcon = true : this.clearIcon = false; 
  }
  clearSearch(input:any){
       input.value = "";
       this.datasource.filter="";
       this.clearIcon = false;
  }
  //delete Invoice
  deleteInv(id: any) {
    this.invoiceId = id;
    this.showDeleteform = true;
  }
  //dialogue delete 
  conifirmDelete() {
    this.vssService.deleteInvoice(this.invoiceId).subscribe((res) => {
      console.log(res)
      this.showDeleteform = false;
      // console.log(this.datasource.data.splice(1, this.invoiceId))
      this.getInvoices()
    });
  }
  addNewInvo() {
      this.router.navigate(['/invoice_generator']);
    this.title = "Add Invoice";
    //this.showForm = true;
    this.newInvoice = {};
    this.btnText = "Add";

  }
  cancel() {
    this.showForm = false;
  }
  addChanges() {

    console.log(this.newInvoice);
    if (this.isEdit) {
      this.vssService.editInvoice(this.newInvoice).subscribe((res) => {
        if (res) {
          this.getInvoices();
          this.showForm = false;
        }
      });
    } else {
      this.vssService.addInvoice(this.newInvoice).subscribe((res) => {
        if (res) {
          this.getInvoices();
          this.showForm = false;
        }
      });
    }
    // this.getInvoices()
  }
  editInvoice(invoice: any) {
    this.showForm = true;
    this.title = "Edit Invoice";
    this.btnText = "Add Changes"
    this.newInvoice.id = invoice.id;
    this.newInvoice.name = invoice.name;
    this.newInvoice.email = invoice.email;
    this.newInvoice.phone = invoice.phone;
    this.isEdit = true;

  }
  cancelDelete() {
    this.showDeleteform = false;
  }

}
