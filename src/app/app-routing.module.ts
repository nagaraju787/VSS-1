import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"registration",pathMatch:"full",component:RegistrationComponent},
  //{path:"invoice",loadChildren:()=>import('./invoices/invoices.module').then(m=>m.InvoicesModule)},
  {path:"invoice",component:InvoicesComponent},
  {path:"",pathMatch:"full",redirectTo:"login"}
  {path:"forgetpassword",pathMatch:"full",component:ForgetPasswordComponent},
  {path:"",pathMatch:"full",redirectTo:"login"},
  { path: 'dashBoard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
