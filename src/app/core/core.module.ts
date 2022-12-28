import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooteerComponent } from './footeer/footeer.component';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    HeaderComponent,
    FooteerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[HeaderComponent,
     FooteerComponent]
})
export class CoreModule { }
