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
  newInvoice: any = {};
  isEdit: Boolean = false;
  title: any;
  btnText: any;
  invoiceId: any;
  showDeleteform: any = false;

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
    this.title = "Add Invoice";
    this.showForm = true;
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
