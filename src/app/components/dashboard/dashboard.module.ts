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
import { CustomerdetailsComponent } from '../customerdetails/customerdetails.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CounterModule } from 'src/app/counter/counter.module';
import { PostsModule } from 'src/app/posts/posts.module';


@NgModule({
  declarations: [
  DashboardComponent,
  HomeComponent,
  ContactusComponent,
  PaymentsComponent,
  CustomerdetailsComponent
  ],
  imports: [
    CommonModule,
     DashBoardRoutingModule,
    CoreModule,
    InvoicesModule,
    StocksModule,
    NgbModule,
    CustomersModule,
    MatTableModule,
    CounterModule,
    PostsModule,
    
  ]
})
export class DashboardModule { }
