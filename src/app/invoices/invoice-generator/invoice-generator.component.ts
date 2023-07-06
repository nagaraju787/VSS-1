
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { VssService } from 'src/app/vss.service';
// import * as pdfMake from "pdfMake/node_modules/iconv-lite";
// import * as pdfFonts from 'pdfMake/node_modules/iconv-lite'

// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class Product {
  name!: string;
  price!: number;
  qty!: number;
}
class Invoice {
  customerName: string | undefined;
  address!: string;
  contactNo!: number;
  email!: string;

  products: Product[] = [];
  additionalDetails!: string;
}
@Component({
  selector: 'app-invoice-generator',
  templateUrl: './invoice-generator.component.html',
  styleUrls: ['./invoice-generator.component.scss']
})
export class InvoiceGeneratorComponent implements OnInit, OnDestroy {
  customers$!: Observable<any>;
  invoiceForm!: FormGroup;
  customers: any;
  customer: any;
  stocks$!: Observable<any>;
  stocks: any;
  stock: any;
  constructor(private vssService: VssService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customers$ = this.vssService.getCustomers();
    this.customers$.subscribe((customers: any) => this.customers = customers);
    this.invoiceForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ["", [Validators.required]],
      address: ['', [Validators.required]],
      contact: ["", [Validators.required]],
      products: this.fb.array([])
    });
    this.stocks$ = this.vssService.getStocks();
    this.stocks$.subscribe(stocks => this.stocks = stocks);
  }
  optionSelect(customer: any) {
    console.log(customer);
    if (customer.target.value){
      this.customer = this.customers.filter((custome: any) => custome.CustomerId == customer.target.value)

      // this.invoiceForm.get('name')?.setValue(this.customer[0].FirstName+" "+this.customer[0].LastName);
      this.invoiceForm.get('email')?.setValue(this.customer[0].Email);
      this.invoiceForm.get('address')?.setValue(this.customer[0].Address);
      this.invoiceForm.get('contact')?.setValue(this.customer[0].Phone);
    }
    console.log(this.customer)
  }
  selectProduct(stock: any, id: any) {
    if (stock.target.value) {
      this.stock = this.stocks.filter((stoc: any) => stoc.id == stock.target.value);
      //this.invoiceForm.get('products')?.setValue(this.stock[0].unitPrice)
      (this.products1.controls.at(id) as FormGroup).get('unitPrice')?.setValue(this.stock[0].unitPrice);
    }
    console.log(this.stock)
    console.log(id)
    console.log(this.products1)
    console.log(this.stocks.indexOf(this.stock[0]));
    const index = this.stocks.indexOf(this.stock[0]);
    (this.products1.controls.at(id) as FormGroup).get('quantity')?.valueChanges.subscribe(x => {
      console.log('firstname value changed')
      console.log(x);
      const Amount = this.stock[0].unitPrice * x;
      (this.products1.controls.at(id) as FormGroup).get('amount')?.setValue(Amount)
    })
    console.log(this.invoiceForm.value)
  }
  get products1() {
    return this.invoiceForm.get('products') as FormArray;
  }
  getProduct() {
    return this.fb.group({
      product: ['', [Validators.required]],
      unitPrice: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    })
  }
  getNewProduct() {
    this.products1.push(this.getProduct())
  }
  ngOnDestroy(): void {

  }
   // Invoice Genertor
  invoice = new Invoice();

  generatePDF(action = 'open') {
    let docDefinition = {
      content: [
        {
          text: 'CUSTOMER INVOICE',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'INVOICE',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: this.customer.FirstName ,
                bold: true
              },
              { text: this.customer.address },
              { text: this.customer.email },
              { text: this.customer.contactNo }
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              {
                text: `Bill No : ${((Math.random() * 1000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Order Details',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              ['Product', 'Price', 'Quantity', 'Amount'],
              ...this.invoice.products.map(p => ([p.name, p.price, p.qty, (p.price * p.qty).toFixed(2)])),
              [{ text: 'Total Amount', colSpan: 3 }, {}, {}, this.invoice.products.reduce((sum, p) => sum + (p.qty * p.price), 0).toFixed(2)]
            ]
          }
        },
        {
          text: 'Additional Details',
          style: 'sectionHeader'
        },
        {
          text: this.invoice.additionalDetails,
          margin: [0, 0, 0, 15]
        },
        {
          columns: [
            [{ qr: `${this.invoice.customerName}`, fit: '50' }],
            [{ text: 'Signature', alignment: 'right', italics: true }],
          ]
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
          ul: [
            'Order can be return in max 10 days.',
            'Warrenty of the product will be subject to the manufacturer terms and conditions.',
            'This is system generated invoice.',
          ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      }
    };

    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download();
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition).print();
    } else {
      pdfMake.createPdf(docDefinition).open();
    }

  }

  addProduct() {
    this.invoice.products.push(new Product());
  }

}
