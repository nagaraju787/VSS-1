import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs';
import { VssService } from 'src/app/vss.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ["id", "itemName", "discription", "batchName", "companyName","quanity","actions"];
  stocksArray:any;
  dilogueBox:boolean=false;
  isEdit:boolean=false;
  addStockText="";
  editable:boolean=false;
  stockItemId:any;
  showDeleteform:boolean=false
  constructor(private vssService:VssService,private fb: FormBuilder) { }
  stocksForm!: FormGroup;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  ngOnInit(): void {
    this.vssService.getStocks().subscribe((data: any) => {
      this.dataSource.data = data;
      this.stocksForm.get('id')?.setValue(data.length+1);
      console.log(data);
  })
     this.stocksForm = this.fb.group({
      id: [],
      itemName: ['', [Validators.required]],
      discription: ['', [Validators.required]],
      batchName: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      quanity: ['', [Validators.required]],
     })
  }
  
 ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getStocks(){
    this.vssService.getStocks().subscribe((data: any) => {
      this.dataSource.data = data;
      this.stocksForm.reset();
      this.stocksForm.get('id')?.setValue(data.length+1);
      console.log(data);
  })
  }
  eventValue:any="";
 filter(event:any){
      this.eventValue=event.target.value; 
      this.dataSource.filter=event.target.value;
   }

 addStockItem(){
    if(this.isEdit){
    this.vssService.editStockItem(this.stocksForm.value).subscribe(()=>{
        this.getStocks();
        this.dilogueBox=false;
       
      });
    }else{
      this.vssService.addStockItem(this.stocksForm.value).subscribe(()=>{
        this.getStocks();
        this.dilogueBox=false;
      });
    }
 }

addStocks(){
    this.dilogueBox=true;
    this.addStockText="Add Stock Item";
  }

cencel(){
    this.dilogueBox=false;
    this.showDeleteform=false;
    this.getStocks();
  }

 editStock(stockitem:any){
  console.log(stockitem);
  this.dilogueBox=true;
  this.stocksForm = this.fb.group({
    id: [stockitem.id],
    itemName: [stockitem.itemName, [Validators.required]],
    discription: [stockitem.discription, [Validators.required]],
    batchName: [stockitem.batchName, [Validators.required]],
    companyName: [stockitem.companyName, [Validators.required]],
    quanity: [stockitem.quanity, [Validators.required]],
   })
   this.isEdit=true;
  } 
  delete(stockitemid:any){
    this.stockItemId=stockitemid;
    this.showDeleteform=true;
  }
  conifirmDelete() {
    this.vssService.deleteStocks(this.stockItemId).subscribe((res) => {
      this.showDeleteform = false;
      this.getStocks();
    });
  } 
}
