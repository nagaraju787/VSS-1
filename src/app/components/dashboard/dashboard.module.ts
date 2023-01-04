import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRoutingModule } from './dashboard-routing.module ';
import { InvoicesModule } from 'src/app/invoices/invoices.module';
import { HomeComponent } from '../home/home.component';
import { ContactusComponent } from '../contactus/contactus.component';



@NgModule({
  declarations: [
  DashboardComponent,
  HomeComponent,
  ContactusComponent
  ],
  imports: [
    CommonModule,
     DashBoardRoutingModule,
    CoreModule,
    InvoicesModule,
  ]
})
export class DashboardModule { }
