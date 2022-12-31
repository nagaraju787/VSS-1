import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [{ path: '', component: DashboardComponent,
children:[{ path: 'userList', loadChildren: () => import('../../userlist/userlist.module').then(m => m.UserlistModule) }]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }

