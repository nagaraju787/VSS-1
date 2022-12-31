import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRoutingModule } from './dashboard-routing.module ';
import { InvoicesModule } from 'src/app/invoices/invoices.module';



@NgModule({
  declarations: [
  DashboardComponent
  ],
  imports: [
    CommonModule,
     DashBoardRoutingModule,
    CoreModule,
    InvoicesModule
  ]
})
export class DashboardModule { }
