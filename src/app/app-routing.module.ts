import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"registration",pathMatch:"full",component:RegistrationComponent},
  {path:"dashboard",pathMatch:"full",component:DashboardComponent},
  {path:"",pathMatch:"full",redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
