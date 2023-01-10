import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordlinkComponent } from './components/forgetpasswordlink/forgetpasswordlink.component';
import { ChildAuthGuardGuard } from './guards/childauthguard.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"registration",pathMatch:"full",component:RegistrationComponent},
  {path:"",pathMatch:"full",redirectTo:"login"},
  {path:"forgetpasswordemailLink",component:ForgetpasswordlinkComponent},
  {path:"forgetpassword",pathMatch:"full",component:ForgetPasswordComponent},
  {path:"",pathMatch:"full",redirectTo:"login"},
  { path: 'dashBoard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule), }
//canActivateChild:[ChildAuthGuardGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
