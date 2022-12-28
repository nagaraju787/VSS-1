import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
 {path:"registration",pathMatch:"full",component:RegistrationComponent}
  {path:"",pathMatch:"full",redirectTo:"login"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
