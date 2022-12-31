import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserlistComponent } from './userlist.component';

const routes: Routes = [{ path: '', component: UserlistComponent,
children:[{path:"userDetails/:id",component:UserDetailsComponent}]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlistRoutingModule { }
