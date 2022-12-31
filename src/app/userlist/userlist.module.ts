import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistRoutingModule } from './userlist-routing.module';
import { UserlistComponent } from './userlist.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserlistComponent,
    UserDetailsComponent,
    
  
  ],
  imports: [
    CommonModule,
    UserlistRoutingModule,
    RouterModule
   
    
  ]
})
export class UserlistModule { }
