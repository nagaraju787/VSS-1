import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from 'src/app/customers/customers.component';
import { InvoicesComponent } from 'src/app/invoices/invoices.component';
import { StocksComponent } from 'src/app/stocks/stocks/stocks.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [{ path: '', component: DashboardComponent,
children:[{ path: 'userList', loadChildren: () => import('../../userlist/userlist.module').then(m => m.UserlistModule) },
          {path:"invoices",component:InvoicesComponent},
          {path:"home",component:HomeComponent},
          {path:"stocks",component:StocksComponent},
          {path:"customers" , component:CustomersComponent},
          {path:"contactus",component:ContactusComponent}
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }

