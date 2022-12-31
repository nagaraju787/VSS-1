import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from 'src/app/invoices/invoices.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [{ path: '', component: DashboardComponent,
children:[{ path: 'userList', loadChildren: () => import('../../userlist/userlist.module').then(m => m.UserlistModule) },
          {path:"invoices",component:InvoicesComponent}
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }

