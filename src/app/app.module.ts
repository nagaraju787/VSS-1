import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
