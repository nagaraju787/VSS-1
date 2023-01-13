import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRoutingModule } from './dashboard-routing.module ';
import { InvoicesModule } from 'src/app/invoices/invoices.module';
import { HomeComponent } from '../home/home.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { StocksModule } from 'src/app/stocks/stocks.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersModule } from 'src/app/customers/customers.module';
import { PaymentsComponent } from '../payments/payments.component';



@NgModule({
  declarations: [
  DashboardComponent,
  HomeComponent,
  ContactusComponent,
  PaymentsComponent
  ],
  imports: [
    CommonModule,
     DashBoardRoutingModule,
    CoreModule,
    InvoicesModule,
    StocksModule,
    NgbModule,
    CustomersModule
  ]
})
export class DashboardModule { }
