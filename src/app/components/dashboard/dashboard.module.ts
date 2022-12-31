import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRoutingModule } from './dashboard-routing.module ';



@NgModule({
  declarations: [
  DashboardComponent
  ],
  imports: [
    CommonModule,
     DashBoardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule { }
